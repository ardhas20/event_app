import { createConnection } from '$lib/db/mysql';
import { redirect } from '@sveltejs/kit';

export async function load({locals}) {

	if (!locals.user || locals.user.role !== 'admin') {
		redirect(302, '/login');
	}

	let connection = await createConnection();
	let [rows] = await connection.execute('SELECT e.id, e.title, l.name as location_name , c.name as category_name, e.start_date FROM events as e LEFT JOIN locations as l ON e.location_id = l.id LEFT JOIN categories as c ON e.category_id = c.id;');

	return {
		events: rows
	};
}

export const actions = {
	deleteEvent: async ({ request }) => {
		const formData = await request.formData();
		const id = formData.get('id');
		const connection = await createConnection();
		const [result] = await connection.execute('DELETE FROM events WHERE  id = ?', [id]);
	}
};
