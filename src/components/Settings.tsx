import useSettings from '../hooks/useSettings';

const Settings = () => {
  const { permissions, cookie, togglePermission, banner, setModal } =
    useSettings();

  return (
    <div className="fixed bottom-0 left-0 w-full max-w-lg max-h-full px-5 py-4 m-2 text-black shadow-md shadow-black/25 z-[9999] bg-background text-foreground font-primary rounded-md">
      <div className="space-y-6">
        <h3 className="w-10/12 m-0 text-xl font-semibold font-primary md:text-2xl">
          {banner.customise}
        </h3>

        {permissions.map(({ slug, title, description }) => (
          <div key={`setting-${slug}`}>
            <div className="flex items-start justify-between">
              <h3 className="m-0 text-lg font-semibold font-primary">
                {title}
              </h3>

              <button
                type="button"
                className={`${
                  cookie[slug] ? 'bg-primary' : 'bg-gray-200'
                } relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 mt-0.5`}
                role="switch"
                aria-checked="false"
                onClick={() => togglePermission(slug)}
              >
                <span className="sr-only">Toggle</span>
                <span
                  aria-hidden="true"
                  className={`${
                    cookie[slug] ? 'translate-x-5' : 'translate-x-0'
                  } pointer-events-none inline-block h-5 w-5 transform rounded-full bg-background shadow ring-0 transition duration-200 ease-in-out`}
                />
              </button>
            </div>

            <p className="m-0 mt-2 text-sm leading-snug font-primary md:text-base">
              {description}
            </p>
          </div>
        ))}
      </div>
      <button
        type="button"
        className="absolute top-0 right-0 w-8 h-8 mt-0 text-xl rounded-full"
        onClick={() => setModal(false)}
      >
        &times;
      </button>
    </div>
  );
};

export default Settings;
