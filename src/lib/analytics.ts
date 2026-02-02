export const trackEvent = (eventName: string, properties?: any) => {
    console.log(`[Analytics] ${eventName}`, properties)
    // Integre aqui com GA4, Pixel, etc.
}
