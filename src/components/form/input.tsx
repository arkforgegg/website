interface Props {
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
  type?: "text" | "email";
}

export function InputComponent({
  state,
  setState,
  placeholder,
  type = "text",
}: Props) {
  const hanldeInput = (e: any) => setState(e.target.value);

  return (
    <input
      className="mt-1 mb-5 w-full bg-[#131313] border border-[#6C6C6C] rounded-md xs:text-xs text-sm px-4 xs:px-2 py-2 airif"
      type={type}
      value={state}
      placeholder={`${placeholder}`}
      onChange={hanldeInput}
    />
  );
}

export function InputMessageComponent({ state, setState, placeholder }: Props) {
  const hanldeInput = (e: any) => setState(e.target.value);

  return (
    <textarea
      className="mt-1 mb-5 w-full bg-[#131313] border border-[#6C6C6C] rounded-md xs:text-xs text-sm px-4 xs:px-2 py-2 xs:h-28 h-40 airif"
      value={state}
      placeholder={placeholder}
      onChange={hanldeInput}
    />
  );
}
