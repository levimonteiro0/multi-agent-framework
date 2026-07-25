const fs = require('fs');
let code = fs.readFileSync('src/design-system/components/dashboard/FunnelCanvas.tsx', 'utf-8');

// Replace Capture Button Color
const captureColorSearch = `<input type="color" value={(settingsObj.buttonColor as string) || "#10b981"} onBlur={(e) => updateSetting("buttonColor", e.target.value)} className="w-full h-8 rounded cursor-pointer" />`;
const captureColorReplace = `<div className="flex items-center gap-3">
                 <input type="color" value={(settingsObj.buttonColor as string) || "#10b981"} onChange={(e) => updateSetting("buttonColor", e.target.value)} className="w-10 h-10 p-1 rounded cursor-pointer border border-border bg-background" />
                 <div className="flex-1 px-3 py-2 bg-background border border-border rounded-lg text-xs font-mono text-muted-foreground flex items-center gap-2">
                   <div className="w-4 h-4 rounded-full shadow-sm" style={{backgroundColor: (settingsObj.buttonColor as string) || "#10b981"}}></div>
                   {(settingsObj.buttonColor as string) || "#10b981"}
                 </div>
               </div>`;
code = code.replace(captureColorSearch, captureColorReplace);

// Replace CTA Button Color
const ctaColorSearch = `<input type="color" value={(settingsObj.buttonColor as string) || "#3b82f6"} onBlur={(e) => updateSetting("buttonColor", e.target.value)} className="w-full h-8 rounded cursor-pointer" />`;
const ctaColorReplace = `<div className="flex items-center gap-3">
                 <input type="color" value={(settingsObj.buttonColor as string) || "#3b82f6"} onChange={(e) => updateSetting("buttonColor", e.target.value)} className="w-10 h-10 p-1 rounded cursor-pointer border border-border bg-background" />
                 <div className="flex-1 px-3 py-2 bg-background border border-border rounded-lg text-xs font-mono text-muted-foreground flex items-center gap-2">
                   <div className="w-4 h-4 rounded-full shadow-sm" style={{backgroundColor: (settingsObj.buttonColor as string) || "#3b82f6"}}></div>
                   {(settingsObj.buttonColor as string) || "#3b82f6"}
                 </div>
               </div>`;
code = code.replace(ctaColorSearch, ctaColorReplace);

fs.writeFileSync('src/design-system/components/dashboard/FunnelCanvas.tsx', code);
console.log('Patched color pickers successfully');
