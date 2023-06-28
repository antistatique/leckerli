import useSettings from '../hooks/useSettings';

const Banner = () => {
  const { banner, acceptAll, rejectAll, setModal } = useSettings();

  return (
    <div className="fixed bottom-0 left-0 max-w-md px-5 py-4 m-2 z-[9998] bg-background space-y-4 font-primary text-foreground rounded-md">
      <h3 className="m-0 text-lg font-semibold font-primary md:text-xl">
        {banner.title}
      </h3>

      <p className="m-0 text-sm leading-snug font-primary md:text-base">
        {banner.description}
      </p>

      <div className="pt-2 space-y-2">
        <button
          type="button"
          className="px-2 mr-2 text-sm font-semibold border-2 border-solid rounded bg-background font-primary text-primary md:px-3.5 py-1.5 md:py-2.5 border-primary hover:border-primary-hover hover:text-primary-hover active:border-primary-active active:text-primary-active transition-colors"
          onClick={() => setModal(true)}
        >
          {banner.customise}
        </button>
        <button
          type="button"
          className="px-2 mr-2 text-sm font-semibold border-2 border-solid rounded bg-background font-primary text-primary md:px-3.5 py-1.5 md:py-2.5 border-primary hover:border-primary-hover hover:text-primary-hover active:border-primary-active active:text-primary-active transition-colors"
          onClick={rejectAll}
        >
          {banner.reject}
        </button>
        <button
          type="button"
          className="px-2 mr-2 text-sm font-semibold border-2 border-solid rounded bg-primary font-primary text-background md:px-3.5 py-1.5 md:py-2.5 border-primary hover:bg-primary-hover hover:border-primary-hover active:bg-primary-active active:border-primary-active transition-colors"
          onClick={acceptAll}
        >
          {banner.accept}
        </button>
      </div>
    </div>
  );
};

export default Banner;
