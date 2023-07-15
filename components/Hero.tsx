import Button from './buttons/Button';

export default function Hero() {
  return (
    <section className="h-screen bg-off-white">
      <div className="mx-auto max-w-5xl px-6 py-12 sm:py-20">
        <hgroup className="mb-10 flex flex-col gap-6 text-off-black">
          <h2 className="max-w-[20rem] text-4xl font-semibold">
            Get a helping hand with your recovery
          </h2>
          <p className="max-w-xl text-lg">
            Journal and receive (gentle) advice from your AI recovery helper.
            Visualize and celebrate your progress.
          </p>
        </hgroup>
        <Button
          intent="primary"
          size="large"
          className="mx-auto block w-11/12 sm:mx-0 sm:max-w-[160px]"
        >
          <span className="text-lg">Sign up</span>
        </Button>
      </div>
    </section>
  );
}
