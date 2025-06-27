function App(): React.JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send("ping");

  return (
    <>
      <div className="w-1/2 mt-8 mx-auto">
        <div className="text-3xl border-2 rounded-s-sm w-fit px-3 cursor-pointer">
          <a target="_blank" rel="noreferrer" onClick={ipcHandle}>
            Send IPC
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
