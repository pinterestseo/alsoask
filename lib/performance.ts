export async function measurePageSpeed() {
  if (typeof window === 'undefined') return null;

  const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  const paint = performance.getEntriesByType('paint');
  
  return {
    // Time to First Byte (TTFB)
    ttfb: navigation.responseStart - navigation.requestStart,
    
    // First Contentful Paint (FCP)
    fcp: paint.find(entry => entry.name === 'first-contentful-paint')?.startTime,
    
    // Largest Contentful Paint (LCP)
    lcp: navigation.loadEventEnd - navigation.loadEventStart,
    
    // Time to Interactive (TTI)
    tti: navigation.domInteractive,
    
    // Total Page Load Time
    loadTime: navigation.loadEventEnd
  };
}