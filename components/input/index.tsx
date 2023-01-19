import clsx from "clsx";

type InputProps = {
  type: string;
  placeholder: string;
  name: string;
  id: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input(props: InputProps) {
  return (
    <input
      className={clsx(
        "w-full h-10 px-4 py-2 border border-primary rounded-3xl outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 transition duration-300 ease-in-out hover:ring-2 hover:ring-primary hover:ring-opacity-50"
      )}
      name={props.name}
      type={props.type}
      placeholder={props.placeholder}
      onChange={props.onChange}
      autoComplete="off"
    />
  );
}
