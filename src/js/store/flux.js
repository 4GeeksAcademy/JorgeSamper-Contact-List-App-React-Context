const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts:[],	
			newContact: {
				email:"",
				fullname:"",
				address:"",
				phone:"",
			}
		},
		actions: {
			// Use getActions to call a function within a fuction
			fetchContacts: () => {
				const baseUrl = "https://assets.breatheco.de/apis/fake/contact/agenda/agenda_jorge";
				const getContactsUrl = '${baseUrl}/agenda/agenda_jorge' //cambiar comillas
				fetch(getContactsUrl)
					.then((response) => response.json()) //recuperar los datos
					.then(data => setStore({ contacts: data })) //lo que queremos actualizar
			},
		},
	};
};

export default getState;
