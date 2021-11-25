const useFocus = () => {
  const htmlElRef = useRef(null);
  const setFocus = () => {
    htmlElRef.current && htmlElRef.current.focus();
  };

  return [htmlElRef, setFocus];
};

export const FocusDemo = () => {
  const [inputRef, setInputFocus] = useFocus();

  return (
    <>
      <button onClick={setInputFocus}>FOCUS</button>
      <input ref={inputRef} />
    </>
  );
};
