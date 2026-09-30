# Base de dades del QUIZ

1. Creeu una base de dades i un usuari per a ella des de HestiaCP. Anoteu el nom complet de la base de dades, que pot incloure un prefix.
2. Obriu phpMyAdmin des de HestiaCP, seleccioneu aquesta base de dades, obriu la pestanya SQL i executeu el contingut de `database.sql` per crear les taules.
3. Configureu les variables d'entorn amb les dades de HestiaCP abans d'executar la migració i iniciar el servidor:

   - `DB_HOST`: host de MySQL indicat pel proveïdor de Hestia; `localhost` només si Node s'executa al mateix servidor.
   - `DB_PORT`: port MySQL (normalment `3306`).
   - `DB_USER`: usuari de base de dades creat a HestiaCP.
   - `DB_PASSWORD`: contrasenya d'aquest usuari.
   - `DB_NAME`: nom complet de la base de dades creada a HestiaCP.

4. Assegureu-vos que Hestia permet connexions MySQL des de l'ordinador on s'executa Node. Des de la carpeta `TR0/backend`, executeu `npm run migrate` per importar les preguntes i respostes dels fitxers JSON. Aquest pas només cal repetir-lo quan vulgueu tornar a importar aquestes dades.
5. Des de la carpeta `TR0`, inicieu el servidor amb `node frontend/server.js` i obriu `http://localhost:3000`.

L'esquema desa les preguntes a `preguntes` i les opcions a `opcions`. Cada opció pertany a una pregunta i `es_correcta` identifica la resposta vàlida. Les rutes mantenen els formats JSON existents.