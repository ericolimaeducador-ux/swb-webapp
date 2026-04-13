import React from 'react';
import { cn } from '@/lib/utils';

export default function LogoBadge({
  mode = 'dark',
  size = 'hero',
  showWordmark = true,
  className,
}) {
  const isDark = mode === 'dark';
  const isHeader = size === 'header';

  return (
    <div
      className={cn(
        'inline-flex items-center gap-3 rounded-2xl transition-all duration-300 relative overflow-hidden',
        isHeader ? 'px-3 py-2.5 md:px-3.5 md:py-3' : 'px-3 py-2.5 md:gap-4 md:px-4 md:py-3.5',
        isDark
          ? 'border border-white/35 bg-white/10 backdrop-blur-xl shadow-[0_20px_48px_rgba(0,0,0,0.34)]'
          : 'border border-slate-200 bg-white shadow-sm',
        className,
      )}
    >
      {isDark && <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/10 via-white/[0.04] to-transparent" />}
      {isDark && <div className="pointer-events-none absolute inset-px rounded-[15px] border border-white/10" />}
      <div
        className={cn(
          'rounded-xl px-2.5 py-2 md:px-3 relative z-10',
          isDark ? 'border border-white/25 bg-[#003b78]/35' : 'border border-slate-200 bg-slate-50',
        )}>
        <img
          src="/logo_swb_firstpage.png"
          alt="SWB"
          className={cn(
            'w-auto object-contain',
            isHeader
              ? 'h-10 sm:h-11 md:h-12 lg:h-14 max-w-[190px]'
              : 'h-11 sm:h-12 md:h-14 lg:h-16 xl:h-[4.75rem] max-w-[220px] md:max-w-[290px]',
            isDark
              ? 'brightness-125 contrast-125 saturate-110 drop-shadow-[0_8px_20px_rgba(0,0,0,0.35)]'
              : 'brightness-100 contrast-100',
          )}
        />
      </div>

      {showWordmark && (
        <div className={cn('pr-1 relative z-10', isHeader ? 'hidden lg:block' : 'hidden sm:block')}>
          <p
            className={cn(
              isHeader ? 'text-[10px] tracking-[0.18em]' : 'text-[11px] md:text-xs tracking-[0.2em]',
              'uppercase font-semibold',
              isDark ? 'text-white/70' : 'text-slate-500',
            )}>
            SWB Brasil
          </p>
          <p className={cn(isHeader ? 'text-sm' : 'text-sm md:text-base', 'font-semibold leading-tight', isDark ? 'text-white' : 'text-slate-800')}>
            Sistema de Protecao Sacral
          </p>
        </div>
      )}
    </div>
  );
}
