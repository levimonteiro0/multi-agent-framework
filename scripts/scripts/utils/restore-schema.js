const fs = require('fs');
let code = fs.readFileSync('prisma/schema.prisma', 'utf-8');

// 1. Update User model
const userStart = `model User {`;
const userReplacement = `model User {
  stripeCustomerId String?   @unique
  stripeSubscriptionId String? @unique
  stripePriceId    String?
  stripeCurrentPeriodEnd DateTime?
  canManageBlog    Boolean   @default(false)
  canWriteBlog     Boolean   @default(false)
  affiliateCode    String?   @unique
  referredBy       String?
  activeCampaignKey String?
  mailchimpKey     String?
  posts            BlogPost[]
  apiKeys          ApiKey[]`;
code = code.replace(userStart, userReplacement);

// 2. Add missing models
const missingModels = `
model BlogPost {
  id        String   @id @default(cuid())
  slug      String   @unique
  title     String
  content   String
  authorId  String
  author    User     @relation(fields: [authorId], references: [id])
  published Boolean  @default(false)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model SiteSetting {
  id    String @id @default(cuid())
  key   String @unique
  value String
}

model FunnelView {
  id        String   @id @default(cuid())
  funnelId  String
  funnel    Funnel   @relation(fields: [funnelId], references: [id], onDelete: Cascade)
  ip        String?
  createdAt DateTime @default(now())
}

model ApiKey {
  id        String   @id @default(cuid())
  userId    String
  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  key       String   @unique
  name      String
  createdAt DateTime @default(now())
}
`;
code += missingModels;

fs.writeFileSync('prisma/schema.prisma', code);

// 3. Update Funnel model to have views
const funnelStart = `model Funnel {`;
const funnelReplacement = `model Funnel {
  views            FunnelView[]
  customDomain     String?   @unique
  webhookUrl       String?`;
code = fs.readFileSync('prisma/schema.prisma', 'utf-8').replace(funnelStart, funnelReplacement);
fs.writeFileSync('prisma/schema.prisma', code);

console.log('Restored schema.prisma');
