import { ANALYTICS } from '@/lib/utils';
import Script from 'next/script';

export default function Scripts() {
  return (
    <>
      <Script id="flexible">
        {`
        (function flexible(window, document) {
          const designWidthDesktop = 1920; // PC端设计稿宽度
          const defaultFontSize = 16; // 默认字体大小
          const defaultBreakPoint = 1024; // 默认移动和pc分割点

          function setRemUnit() {
            // 获取窗口宽度
            const screenWidth = document.documentElement.clientWidth;
            if (screenWidth >= defaultBreakPoint && screenWidth <= designWidthDesktop) {
              // 考虑DPR计算根字体大小
              const rootFontSize = (screenWidth / designWidthDesktop) * defaultFontSize;
              // 设置根字体大小
              document.documentElement.style.fontSize = rootFontSize + 'px';
            } else {
              document.documentElement.style.fontSize = defaultFontSize + 'px';
            }
          }
          setRemUnit();

          const resizeEvt =
            'orientationchange' in window ? 'orientationchange' : 'resize';
          window.addEventListener(resizeEvt, setRemUnit, false);
          document.addEventListener('DOMContentLoaded', setRemUnit, false);
        })(window, document);
        `}
      </Script>
      {process.env.NODE_ENV === 'production' && (
        <Script id="debugger">
          {`
            (() => {
              function ban() {
                setInterval(() => {
                  Function('debugger')();
                }, 50);
              }
              try {
                ban();
              } catch (err) { }
            })()
          `}
        </Script>
      )}
      {ANALYTICS.baidu && (
        <Script id="baidu-analytics">
          {`
            var _hmt = _hmt || [];
            (function() {
              var hm = document.createElement("script");
              hm.src = "https://hm.baidu.com/hm.js?${ANALYTICS.baidu}";
              var s = document.getElementsByTagName("script")[0];
              s.parentNode.insertBefore(hm, s);
            })();
          `}
        </Script>
      )}
      {ANALYTICS.google && (
        <>
          <Script
            async
            defer
            crossOrigin="anonymous"
            src={`https://www.googletagmanager.com/gtag/js?id=${ANALYTICS.google}`}
          />
          <Script id="google-analytics">
            {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${ANALYTICS.google}');
              `}
          </Script>
        </>
      )}
      {ANALYTICS.yandex && (
        <Script async defer id="yandex-analytics">
          {`
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

            ym(${ANALYTICS.yandex}, "init", {
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true,
                ecommerce:"dataLayer"
            });
          `}
        </Script>
      )}
      {ANALYTICS.facebook && (
        <>
          <Script id="facebook-analytics">
            {`
             window.fbAsyncInit = function() {
                FB.init({
                  appId            : '${ANALYTICS.facebook}',
                  xfbml            : true,
                  version          : 'v19.0'
                });
                FB.AppEvents.logPageView();
              };
            `}
          </Script>
          <Script
            async
            defer
            crossOrigin="anonymous"
            src="https://connect.facebook.net/en_US/sdk.js"
          />
        </>
      )}
    </>
  );
}
