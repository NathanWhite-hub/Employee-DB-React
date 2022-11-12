function Employee(props) {
  return (
    <div class="m-2 max-w-sm space-y-2 rounded-xl bg-white py-8 px-8 shadow-lg sm:flex sm:items-center sm:space-y-0 sm:space-x-6 sm:py-4">
      <img
        class="mx-auto block h-[100px] w-[100px] rounded-full object-cover sm:mx-0 sm:shrink-0"
        src={props.img}
        alt="Woman's Face"
      />
      <div class="space-y-2 text-center sm:text-left">
        <div class="space-y-0.5">
          <p class="text-lg font-semibold text-black">{props.name}</p>
          <p class="font-medium text-slate-500">{props.role}</p>
        </div>
        <button class="rounded-full border border-purple-200 px-4 py-1 text-sm font-semibold text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
          Update
        </button>
      </div>
    </div>
  );
}

export default Employee;
