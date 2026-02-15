import TODOList from './TODOList';

function TODO() {
  return (
    <section className="w-full max-w-5xl mx-auto text-center md:text-left pt-8">
      <div className="grid gap-6 justify-items-center md:justify-items-start">
        <TODOList />
      </div>
    </section>
  );
}

export default TODO;