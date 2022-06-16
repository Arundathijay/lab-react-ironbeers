const BeerForm = (props) => {
  return (
    <form method='POST'>
      <label htmlFor='input-name'>Beer Name</label>
      <input
        id='input-name'
        type='text'
        placeholder='Name'
        value={props.beer.name}
        onChange={(event) => {
          props.onBeerChange({ ...props.beer, name: event.target.value });
        }}
      />

      <label htmlFor='input-tagline'>Tagline</label>
      <input
        id='input-tagline'
        type='text'
        placeholder='Tagline'
        value={props.beer.tagline}
        onChange={(event) => {
          props.onBeerChange({ ...props.beer, tagline: event.target.value });
        }}
      />

      <label htmlFor='input-description '>Description </label>
      <input
        id='input-description '
        type='text'
        placeholder='Description'
        value={props.beer.Description}
        onChange={(event) => {
          props.onBeerChange({
            ...props.beer,
            Description: event.target.value
          });
        }}
      />

      <label htmlFor='input-firstBrewed '>First Brewed </label>
      <input
        id='input-firstBrewed '
        type='text'
        placeholder='First Brewed'
        value={props.beer.firstBrewed}
        onChange={(event) => {
          props.onBeerChange({
            ...props.beer,
            firstBrewed: event.target.value
          });
        }}
      />
      <label htmlFor='input-brewersTips  '>Brewers Tips </label>
      <input
        id='input-brewersTips '
        type='text'
        placeholder='Brewers Tips '
        value={props.beer.brewersTips}
        onChange={(event) => {
          props.onBeerChange({
            ...props.beer,
            brewersTips: event.target.value
          });
        }}
      />
      <label htmlFor='input-attenuationLevel'>Attenuation Level</label>
      <input
        id='input-attenuationLevel'
        type='number'
        placeholder='Attenuation Level'
        value={props.beer.attenuationLevel}
        onChange={(event) => {
          props.onBeerChange({
            ...props.beer,
            attenuationLevel: event.target.value
          });
        }}
      />
      <label htmlFor='input-contributedBy '>Contributed By </label>
      <input
        id='input-brewersTips '
        type='text'
        placeholder='Contributed By '
        value={props.beer.contributedBy}
        onChange={(event) => {
          props.onBeerChange({
            ...props.beer,
            contributedBy: event.target.value
          });
        }}
      />
    </form>
  );
};

export default BeerForm;
