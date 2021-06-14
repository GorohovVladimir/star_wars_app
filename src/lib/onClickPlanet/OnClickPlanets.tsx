export let names: any = [];

function OnClickPlanet(props: any) {
  const name = props.target.innerText;

  names = name;
}

export default OnClickPlanet;
