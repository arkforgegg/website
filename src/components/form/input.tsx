interface Props {
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
}

export function InputComponent({ state, setState, placeholder }: Props) {
  const hanldeInput = (e: any) => setState(e.target.value);

  return (
    <input
      className="mt-1 mb-5 w-full bg-[#131313] border border-[#6C6C6C] rounded-md text-sm px-4 py-2 airif"
      type="text"
      value={state}
      placeholder={`Enter your ${placeholder.toLowerCase()} here`}
      onChange={hanldeInput}
    />
  );
}

export function InputMessageComponent({ state, setState, placeholder }: Props) {
  const hanldeInput = (e: any) => setState(e.target.value);

  return (
    <textarea
      className="mt-1 mb-5 w-full bg-[#131313] border border-[#6C6C6C] rounded-md text-sm px-4 py-2 h-40 airif"
      value={state}
      placeholder={placeholder}
      onChange={hanldeInput}
    />
  );
}
