const fs = require('fs');
let code = fs.readFileSync('src/app/[locale]/page.tsx', 'utf-8');

// 1. Add imports
const importsTarget = `import { MarketingHeader } from "@/design-system/components/marketing/MarketingHeader";`;
const newImports = `import { MarketingHeader } from "@/design-system/components/marketing/MarketingHeader";
import { FadeIn } from "@/design-system/components/marketing/FadeIn";
import { TrustedBy } from "@/design-system/components/marketing/TrustedBy";`;
code = code.replace(importsTarget, newImports);

// 2. Wrap HERO section in FadeIn
const heroTarget = `<section className="pt-32 pb-20 px-6 max-w-7xl mx-auto text-center">`;
const newHero = `<FadeIn><section className="pt-32 pb-20 px-6 max-w-7xl mx-auto text-center">`;

const heroEndTarget = `              <CheckCircle2 className="w-4 h-4 text-primary" /> {t('ctaNoCard')}
            </p>
          </div>`;
const newHeroEnd = `              <CheckCircle2 className="w-4 h-4 text-primary" /> {t('ctaNoCard')}
            </p>
          </div>
        </section></FadeIn>`;

code = code.replace(heroTarget, newHero);
code = code.replace(heroEndTarget, newHeroEnd);

// 3. Add TrustedBy
const afterHeroTarget = `          {/* DASHBOARD PREVIEW */}`;
const addTrustedBy = `          <FadeIn delay={0.2}><TrustedBy /></FadeIn>\n\n          {/* DASHBOARD PREVIEW */}`;
code = code.replace(afterHeroTarget, addTrustedBy);

// 4. Wrap Anim 1
const anim1Target = `<div className="space-y-8">
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-bold">1. Fluxo de VSL & Checkout</h3>`;
const newAnim1 = `<FadeIn delay={0.1}><div className="space-y-8">
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-bold">1. Fluxo de VSL & Checkout</h3>`;
const anim1EndTarget = `<VSLCheckoutAnimation />
            </div>`;
const newAnim1End = `<VSLCheckoutAnimation />
            </div></FadeIn>`;
code = code.replace(anim1Target, newAnim1);
code = code.replace(anim1EndTarget, newAnim1End);

// 5. Wrap Anim 2
const anim2Target = `<div className="space-y-8">
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-bold">2. Fluxo de Captura de Leads</h3>`;
const newAnim2 = `<FadeIn delay={0.2}><div className="space-y-8">
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-bold">2. Fluxo de Captura de Leads</h3>`;
const anim2EndTarget = `<LeadCaptureAnimation />
            </div>`;
const newAnim2End = `<LeadCaptureAnimation />
            </div></FadeIn>`;
code = code.replace(anim2Target, newAnim2);
code = code.replace(anim2EndTarget, newAnim2End);

// 6. Wrap Anim 3
const anim3Target = `<div className="space-y-8">
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-bold">3. Fluxo de Quiz & Qualificação</h3>`;
const newAnim3 = `<FadeIn delay={0.3}><div className="space-y-8">
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-bold">3. Fluxo de Quiz & Qualificação</h3>`;
const anim3EndTarget = `<QuizAnimation />
            </div>`;
const newAnim3End = `<QuizAnimation />
            </div></FadeIn>`;
code = code.replace(anim3Target, newAnim3);
code = code.replace(anim3EndTarget, newAnim3End);

fs.writeFileSync('src/app/[locale]/page.tsx', code);
console.log('Patched Landing Page successfully');
