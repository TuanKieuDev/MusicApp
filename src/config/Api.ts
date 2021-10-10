const base_url = 'https://60c2268c069afc0017f49b63.mockapi.io'
const urls = {
    song: base_url + '/Song',
    songByKey: (name:string)=>base_url + `/Song?name=${name}`
};

export default urls