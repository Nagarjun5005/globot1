import React, { useEffect } from 'react';

function BotpressChatbot() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.botpress.cloud/webchat/v2.2/inject.js'; // Matches your earlier CDN
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.botpress) {
        console.log('Botpress loaded successfully');
        window.botpress.init({
          botId: '0d89b1da-a0ba-4a9a-8b66-b43047d04451',
          configuration: {
            website: {},
            email: {},
            phone: {},
            termsOfService: {},
            privacyPolicy: {},
            color: '#3B82F6',
            variant: 'solid',
            themeMode: 'light',
            fontFamily: 'inter',
            radius: 1,
            additionalStylesheetUrl: 'https://webchat-styler-css.botpress.app/prod/02edba27-3a73-4cee-b178-80311e82724d/v66576/style.css',
          },
          clientId: '01305c0a-073b-4577-ac38-e1d119a04d13',
        });
      } else {
        console.error('Botpress not available. Trying botpressWebChat...');
        // Fallback to botpressWebChat if needed
        if (window.botpressWebChat) {
          window.botpressWebChat.init({
            botId: '0d89b1da-a0ba-4a9a-8b66-b43047d04451',
            clientId: '01305c0a-073b-4577-ac38-e1d119a04d13',
            hostUrl: 'https://cdn.botpress.cloud/webchat/v2.2',
            messagingUrl: 'https://messaging.botpress.cloud',
            botName: 'GloBot',
            hideWidget: false,
            showPoweredBy: false,
          });
        }
      }
    };

    script.onerror = (error) => {
      console.error('Script load error:', error);
    };

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div>
      <div id="bp-web-widget-container" style={{ height: '500px', width: '400px' }} />
    </div>
  );
}

export default BotpressChatbot;