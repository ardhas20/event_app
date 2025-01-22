import mysql from 'mysql2/promise';
let connection = null;
export function createConnection() {
	if (!connection) {
		connection = mysql.createConnection({
			host: 'htl-projekt.com',
			user: 'arditahasmegaj',
			port: 3306,
			password: '!Insy_2024$',
			database: '2024_4bw_arditahasmegaj_event_app'
		});
	}
	return connection;
}
