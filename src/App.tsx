
function App() {
  const urlParams = new URLSearchParams(window.location.search);
  const authorizationCode = urlParams.get('code'); // This will extract the code
  console.log(authorizationCode);
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h3> Your Slack Authorization Code  :</h3>
        <h4> {authorizationCode}</h4>
      </div >
    </>
  )
}

export default App
