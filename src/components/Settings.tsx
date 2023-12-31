import DOMPurify from 'dompurify';
import { useState } from 'preact/hooks';

import useSettings from '../hooks/useSettings';

const Settings = () => {
  const { cookie, setPermissions, banner, setModal } = useSettings();
  const [cookieProxy, setCookieProxy] = useState(cookie);

  // Prevent the injection of unwanted HTML tags in the banner description
  const allowedTags = [
    'b',
    'i',
    'em',
    'strong',
    'p',
    'ul',
    'li',
    'ol',
    'span',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'a',
    'div',
  ];
  const allowedAttributes = ['href', 'target'];

  return (
    <div className="fixed bottom-0 left-0 w-full max-w-lg max-h-full px-5 py-4 m-2 overflow-y-auto text-black shadow-md shadow-black/25 z-[9999] bg-background text-foreground font-primary rounded-md banner-wrapper">
      <div className="space-y-6">
        <div>
          <h3 className="w-10/12 m-0 text-xl font-semibold font-primary md:text-2xl banner-title">
            {banner.customise}
          </h3>

          {banner.customiseDescription && (
            <p
              className="m-0 mt-2 text-sm leading-snug font-primary md:text-base banner-settings-general-description"
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(banner.customiseDescription, {
                  USE_PROFILES: { html: true },
                  ALLOWED_TAGS: allowedTags,
                  ALLOWED_ATTR: allowedAttributes,
                }),
              }}
            />
          )}
        </div>

        {banner.settings.map(({ slug, title, description }) => (
          <div key={`setting-${slug}`}>
            <div className="flex items-start justify-between">
              <h3 className="m-0 text-lg font-semibold font-primary banner-settings-title">
                {title}
              </h3>

              <button
                type="button"
                className={`${
                  cookieProxy[slug] ? 'bg-primary' : 'bg-gray-200'
                } relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 mt-0.5 banner-settings-toggle`}
                role="switch"
                aria-checked="false"
                onClick={() =>
                  setCookieProxy({ ...cookieProxy, [slug]: !cookieProxy[slug] })
                }
              >
                <span className="sr-only">Toggle</span>
                <span
                  aria-hidden="true"
                  className={`${
                    cookieProxy[slug] ? 'translate-x-5' : 'translate-x-0'
                  } pointer-events-none inline-block h-5 w-5 transform rounded-full bg-background shadow ring-0 transition duration-200 ease-in-out`}
                />
              </button>
            </div>

            <p className="m-0 mt-2 text-sm leading-snug font-primary md:text-base banner-settings-description">
              {description}
            </p>
          </div>
        ))}

        <div className="pt-4">
          <button
            type="button"
            className="px-2 mr-2 text-sm font-semibold border-2 border-solid rounded bg-primary font-primary text-background md:px-3.5 py-1.5 md:py-2.5 border-primary hover:bg-primary-hover hover:border-primary-hover active:bg-primary-active active:border-primary-active transition-colors banner-settings-save"
            onClick={() => {
              setPermissions(cookieProxy);
              setModal(false);
            }}
          >
            {banner.save}
          </button>
        </div>
      </div>
      <button
        type="button"
        className="absolute top-0 right-0 w-8 h-8 mt-0 text-xl rounded-full banner-settings-close"
        onClick={() => setModal(false)}
      >
        &times;
      </button>
    </div>
  );
};

export default Settings;
