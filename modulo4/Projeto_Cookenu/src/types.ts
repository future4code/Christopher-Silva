export type Profile = {
   id: string,
   name: string,
   email: string
}

export type Recipe = {
   id: string,
	title: string,
	description: string
	created_date: string
}

export interface authenticationData {
   id: string
}

export interface user {
   id: string
   email: string
   name: string
   password: string
}

export interface recipe {
   id: string
   title: string
   description: string
   created_date: string
}