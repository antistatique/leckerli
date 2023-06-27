import useSettings from '../hooks/useSettings';

const Settings = () => {
  const { permissions, cookie, togglePermission, banner, setModal }  = useSettings();

  return (
    <div class="absolute z-[9999] inset-0 grid place-content-center">
      <div class="relative max-w-md bg-white m-2 px-5 py-4 font-primary text-black rounded-md max-h-full">
        <div class="space-y-6">
          <h3 class="w-10/12 m-0 font-primary font-semibold text-xl md:text-2xl">
            {banner.customise}
          </h3>

          {permissions.map(({slug, title, description}) => (
            <div key={`setting-${slug}`}>
              <div class="flex items-start justify-between">
                <h3 class="m-0 font-primary font-semibold text-lg">
                  {title}
                </h3>

                <button
                  type="button"
                  class={`${cookie[slug] ? 'bg-primary' : 'bg-gray-200'} relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 mt-0.5`}
                  role="switch" aria-checked="false"
                  onClick={() => togglePermission(slug)}
                >
                  <span class="sr-only">Toggle</span>
                  <span aria-hidden="true"
                    class={`${cookie[slug] ? 'translate-x-5' : 'translate-x-0'} pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`}></span>
                </button>
              </div>

              <p class="m-0 mt-2 leading-snug font-primary text-sm md:text-base">
                {description}
              </p>
            </div>
          ))}
        </div>
        <button
          class="absolute top-0 right-0 w-8 h-8 bg-white mt-0 text-xl rounded-full"
          onClick={() => setModal(false)}
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Settings;
