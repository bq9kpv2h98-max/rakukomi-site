const {ga4,clarity,pixel}=document.body.dataset;
const load=(src)=>{const script=document.createElement('script');script.src=src;script.async=true;document.head.append(script);};
if(ga4){
  window.dataLayer=window.dataLayer||[];
  window.gtag=function(){window.dataLayer.push(arguments);};
  window.gtag('js',new Date());window.gtag('config',ga4);
  load(`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(ga4)}`);
}
if(clarity){
  window.clarity=window.clarity||function(){(window.clarity.q=window.clarity.q||[]).push(arguments);};
  load(`https://www.clarity.ms/tag/${encodeURIComponent(clarity)}`);
}
if(pixel){
  const fbq=window.fbq=function(){fbq.callMethod?fbq.callMethod.apply(fbq,arguments):fbq.queue.push(arguments);};
  fbq.queue=[];fbq.loaded=true;fbq.version='2.0';window._fbq=fbq;
  fbq('init',pixel);fbq('track','PageView');load('https://connect.facebook.net/en_US/fbevents.js');
}
