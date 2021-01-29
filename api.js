const url = "https://api.covid19api.com"

export async function getCovidSummary(){

    try {
      let response = await fetch(
        url + '/summary'
      );
      let json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
    }
 
 
}


      export async function getCountryList(){
       
        try {
          let response = await fetch(
            url + '/countries'
          );
          let json = await response.json();
          return json;
        } catch (error) {
          console.error(error);
        }
      }
    