const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],
			demo: [
				{
					"name": "RaulSantana",
					"phone": "612345678",
					"email": "example@gmail.com",
					"address": "calle Falsa, 123",
					"id": 6
				},
			]
		},
		actions: {
			initializeUser: () => {
				const username = "RaulSantana";
				const url = `https://playground.4geeks.com/contact/agendas/${username}`;
				
				fetch(url)
					.then(response => {
						if (response.status === 404) {
							return fetch(url, {
								method: "POST",
								headers: {
									"Content-Type": "application/json"
								},
								body: JSON.stringify({ "slug": username })
							});
						} else if (!response.ok) {
							throw new Error(`HTTP error! status: ${response.status}`);
						}
						return response.json();
					})
					.then(data => {
						if (data && data.slug) {
							console.log("User initialized successfully");
						}
					})
					.catch(err => console.error(err));
			},
			getContacts: () => {
				const username = "RaulSantana";
				fetch(`https://playground.4geeks.com/contact/agendas/${username}/contacts`)
					.then(response => response.json())
					.then(data => setStore({ contacts: data.contacts }))
					.catch(err => console.error(err));
			},
			deleteContact: id => {
				const username = "RaulSantana";
				fetch(`https://playground.4geeks.com/contact/agendas/${username}/contacts/${id}`, {
					method: "DELETE"
				})
					.then(response => {
						if (!response.ok) {
							throw new Error(`HTTP error! status: ${response.status}`);
						}
						const store = getStore();
						const updatedContacts = store.contacts.filter(contact => contact.id !== id);
						setStore({ contacts: updatedContacts });
					})
					.catch(err => console.error(err));
			},
			editContact: (id, updatedContact) => {
				const username = "RaulSantana";
				fetch(`https://playground.4geeks.com/contact/agendas/${username}/contacts/${id}`, {
					method: "PUT",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(updatedContact)
				})
					.then(response => {
						if (!response.ok) {
							throw new Error(`HTTP error! status: ${response.status}`);
						}
						return response.json();
					})
					.then(data => {
						const store = getStore();
						const updatedContacts = store.contacts.map(contact =>
							contact.id === parseInt(id) ? data : contact
						);
						setStore({ contacts: updatedContacts });
					})
					.catch(err => console.error(err));
			}
		}
	};
};

export default getState;
