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
      className="w-full bg-[#131313] border border-[#6C6C6C] rounded-[5px] xs:text-xs text-sm px-4 xs:px-2 h-[56px] airif text-white placeholder:text-[#6c6c6c]"
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
      className="w-full bg-[#131313] border border-[#6C6C6C] rounded-[5px] xs:text-xs text-sm px-4 xs:px-2 py-2 xs:h-28 h-[130px] airif resize-none text-white placeholder:text-[#6c6c6c]"
      value={state}
      placeholder={placeholder}
      onChange={hanldeInput}
    />
  );
}
