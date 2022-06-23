{
		"info": {
			"_postman_id": "1bf3d9e1-2c57-4845-ab88-cc6d62f0ddfe",
			"name": "hmw_2",
			"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
		},
		"item": [
			{
				"name": "first",
				"event": [
					{
						"listen": "test",
						"script": {
							"exec": [
								"//2. Статус код 200\r",
								"pm.test(\"Status code is 200\", function () {\r",
								"    pm.response.to.have.status(200);\r",
								"});\r",
								"\r",
								"//3. Проверить, что в body приходит правильный string.\r",
								"pm.test(\"Body is correct\", function () {\r",
								"    pm.response.to.have.body(\"This is the first responce from server!\");\r",
								"});\r",
								"\r",
								""
							],
							"type": "text/javascript"
						}
					}
				],
				"protocolProfileBehavior": {
					"disableBodyPruning": true
				},
				"request": {
					"method": "GET",
					"header": [],
					"body": {
						"mode": "formdata",
						"formdata": []
					},
					"url": {
						"raw": "{{url}}:{{port}}/first",
						"host": [
							"{{url}}"
						],
						"port": "{{port}}",
						"path": [
							"first"
						]
					}
				},
				"response": []
			},
			{
				"name": "User_info_3",
				"event": [
					{
						"listen": "test",
						"script": {
							"exec": [
								"//2. Статус код 200\r",
								"pm.test(\"Status code is 200\", function () {\r",
								"    pm.response.to.have.status(200);\r",
								"});\r",
								"//3. Спарсить response body в json.\r",
								"let jsonData = pm.response.json();\r",
								"\r",
								"//4. Проверить, что name в ответе равно name s request (name вбить руками.)\r",
								"let user_name = jsonData.name;\r",
								"\r",
								"pm.test(\"Check name\", function () {\r",
								"    pm.expect(user_name).to.eql(\"Arina\");\r",
								"});\r",
								"\r",
								"//5. Проверить, что age в ответе равно age s request (age вбить руками.)\r",
								"let user_age = +jsonData.age;\r",
								"\r",
								"pm.test(\"Check age\", function () {\r",
								"    pm.expect(+user_age).to.eql(22);\r",
								"});\r",
								"\r",
								"//6. Проверить, что salary в ответе равно salary s request (salary вбить руками.)\r",
								"let user_salary = +jsonData.salary;\r",
								"\r",
								"pm.test(\"Check salary\", function () {\r",
								"    pm.expect(+user_salary).to.eql(500);\r",
								"});\r",
								"\r",
								"//7. Спарсить request.\r",
								"let requestData = request.data;\r",
								"\r",
								"//8. Проверить, что name в ответе равно name s request (name забрать из request.)\r",
								"pm.test(\"Check request name\", function () {\r",
								"    pm.expect(requestData.name).to.eql(user_name);\r",
								"});\r",
								"\r",
								"//9. Проверить, что age в ответе равно age s request (age забрать из request.)\r",
								"pm.test(\"Check request age\", function () {\r",
								"    pm.expect(+requestData.age).to.eql(+user_age);\r",
								"});\r",
								"\r",
								"//10. Проверить, что salary в ответе равно salary s request (salary забрать из request.)\r",
								"pm.test(\"Check request salary\", function () {\r",
								"    pm.expect(+requestData.salary).to.eql(+user_salary);\r",
								"});\r",
								"\r",
								"//11. Вывести в консоль параметр family из response.\r",
								"console.log(jsonData.family)\r",
								"\r",
								"//12. Проверить что u_salary_1_5_year в ответе равно salary*4 (salary забрать из request)\r",
								"let user_salary_1_5 = jsonData.family.u_salary_1_5_year;\r",
								"\r",
								"pm.test(\"Check request 1_5_year_salary\", function () {\r",
								"    pm.expect(+requestData.salary*4).to.eql(+user_salary_1_5);\r",
								"});\r",
								""
							],
							"type": "text/javascript"
						}
					}
				],
				"request": {
					"method": "POST",
					"header": [],
					"body": {
						"mode": "formdata",
						"formdata": [
							{
								"key": "name",
								"value": "{{name}}",
								"type": "text"
							},
							{
								"key": "age",
								"value": "{{age}}",
								"type": "text"
							},
							{
								"key": "salary",
								"value": "{{salary}}",
								"type": "text"
							}
						]
					},
					"url": {
						"raw": "{{url}}:{{port}}/user_info_3",
						"host": [
							"{{url}}"
						],
						"port": "{{port}}",
						"path": [
							"user_info_3"
						]
					}
				},
				"response": []
			},
			{
				"name": "Object_info_3",
				"event": [
					{
						"listen": "test",
						"script": {
							"exec": [
								"//2. Статус код 200\r",
								"pm.test(\"Status code is 200\", function () {\r",
								"    pm.response.to.have.status(200);\r",
								"});\r",
								"\r",
								"//3. Спарсить response body в json.\r",
								"let responceData = pm.response.json();\r",
								"\r",
								"//4. Спарсить request.\r",
								"let requestData = pm.request.url.query.toObject();\r",
								"\r",
								"\r",
								"console.log(requestData)\r",
								"\r",
								"//5. Проверить, что name в ответе равно name s request (name забрать из request.)\r",
								"pm.test(\"Check responce name\", function () {\r",
								"    pm.expect(responceData.name).to.eql(requestData.name);\r",
								"});\r",
								"\r",
								"//6. Проверить, что age в ответе равно age s request (age забрать из request.)\r",
								"pm.test(\"Check responce age\", function () {\r",
								"    pm.expect(+responceData.age).to.eql(+requestData.age);\r",
								"});\r",
								"\r",
								"//7. Проверить, что salary в ответе равно salary s request (salary забрать из request.)\r",
								"pm.test(\"Check responce salary\", function () {\r",
								"    pm.expect(+responceData.salary).to.eql(+requestData.salary);\r",
								"});\r",
								"\r",
								"//8. Вывести в консоль параметр family из response.\r",
								"console.log(responceData.family)\r",
								"\r",
								"//9. Проверить, что у параметра dog есть параметры name.\r",
								"pm.test(\"Check property 'name'\", function () {\r",
								"    pm.expect(responceData.family.pets.dog).to.have.property(\"name\");\r",
								"});\r",
								"\r",
								"//10. Проверить, что у параметра dog есть параметры age.\r",
								"pm.test(\"Check property 'age'\", function () {\r",
								"    pm.expect(responceData.family.pets.dog).to.have.property(\"age\");\r",
								"});\r",
								"\r",
								"//11. Проверить, что параметр name имеет значение Luky.\r",
								"pm.test(\"Check dog name\", function () {\r",
								"    pm.expect(responceData.family.pets.dog.name).to.eql(\"Luky\");\r",
								"});\r",
								"\r",
								"//12. Проверить, что параметр age имеет значение 4.\r",
								"pm.test(\"Check dog age\", function () {\r",
								"    pm.expect(+responceData.family.pets.dog.age).to.eql(4);\r",
								"});"
							],
							"type": "text/javascript"
						}
					}
				],
				"protocolProfileBehavior": {
					"disableBodyPruning": true
				},
				"request": {
					"method": "GET",
					"header": [],
					"body": {
						"mode": "formdata",
						"formdata": []
					},
					"url": {
						"raw": "{{url}}:{{port}}/object_info_3?name={{name}}&age={{age}}&salary={{salary}}",
						"host": [
							"{{url}}"
						],
						"port": "{{port}}",
						"path": [
							"object_info_3"
						],
						"query": [
							{
								"key": "name",
								"value": "{{name}}"
							},
							{
								"key": "age",
								"value": "{{age}}"
							},
							{
								"key": "salary",
								"value": "{{salary}}"
							}
						]
					}
				},
				"response": []
			},
			{
				"name": "Object_info_4",
				"event": [
					{
						"listen": "test",
						"script": {
							"exec": [
								"//2. Статус код 200\r",
								"pm.test(\"Status code is 200\", function () {\r",
								"    pm.response.to.have.status(200);\r",
								"});\r",
								"\r",
								"//3. Спарсить response body в json.\r",
								"let responceData = pm.response.json();\r",
								"\r",
								"//4. Спарсить request.\r",
								"let requestData = pm.request.url.query.toObject();\r",
								"\r",
								"//5. Проверить, что name в ответе равно name s request (name забрать из request.)\r",
								"pm.test(\"Check responce name\", function () {\r",
								"    pm.expect(responceData.name).to.eql(requestData.name);\r",
								"});\r",
								"\r",
								"//6. Проверить, что age в ответе равно age из request (age забрать из request.)\r",
								"pm.test(\"Check responce age\", function () {\r",
								"    pm.expect(+responceData.age).to.eql(+requestData.age);\r",
								"});\r",
								"\r",
								"//7. Вывести в консоль параметр salary из request.\r",
								"console.log(requestData.salary)\r",
								"\r",
								"//8. Вывести в консоль параметр salary из response.\r",
								"console.log(responceData.salary)\r",
								"\r",
								"//9. Вывести в консоль 0-й элемент параметра salary из response.\r",
								"console.log(responceData.salary[0])\r",
								"\r",
								"//10. Вывести в консоль 1-й элемент параметра salary параметр salary из response.\r",
								"console.log(responceData.salary[1])\r",
								"\r",
								"//11. Вывести в консоль 2-й элемент параметра salary параметр salary из response.\r",
								"console.log(responceData.salary[2])\r",
								"\r",
								"//12. Проверить, что 0-й элемент параметра salary равен salary из request (salary забрать из request.)\r",
								"pm.test(\"Check salary\", function () {\r",
								"    pm.expect(+responceData.salary[0]).to.eql(+requestData.salary);\r",
								"});\r",
								"\r",
								"//13. Проверить, что 1-й элемент параметра salary равен salary*2 из request (salary забрать из request.)\r",
								"pm.test(\"Check salary*2\", function () {\r",
								"    pm.expect(+responceData.salary[1]).to.eql(+requestData.salary*2);\r",
								"});\r",
								"\r",
								"//14. Проверить, что 2-й элемент параметра salary равен salary*3 из request (salary забрать из request.)\r",
								"pm.test(\"Check salary*3\", function () {\r",
								"    pm.expect(+responceData.salary[2]).to.eql(+requestData.salary*3);\r",
								"});\r",
								"\r",
								"//18. Передать в окружение переменную name\r",
								"pm.environment.set(\"name\", \"Irina\");\r",
								"\r",
								"//19. Передать в окружение переменную age\r",
								"pm.environment.set(\"age\", 24);\r",
								"\r",
								"//20. Передать в окружение переменную salary\r",
								"pm.environment.set(\"salary\", 2000);\r",
								"\r",
								"//21. Написать цикл который выведет в консоль по порядку элементы списка из параметра salary.\r",
								"\r",
								"responceData.salary.forEach(function(salary, index){ \r",
								"    console.log('salary[' + index + '] = ' + salary)});\r",
								""
							],
							"type": "text/javascript"
						}
					}
				],
				"request": {
					"method": "GET",
					"header": [],
					"url": {
						"raw": "{{url}}:{{port}}/object_info_4?name={{name}}&age={{age}}&salary={{salary}}",
						"host": [
							"{{url}}"
						],
						"port": "{{port}}",
						"path": [
							"object_info_4"
						],
						"query": [
							{
								"key": "name",
								"value": "{{name}}"
							},
							{
								"key": "age",
								"value": "{{age}}"
							},
							{
								"key": "salary",
								"value": "{{salary}}"
							}
						]
					}
				},
				"response": []
			},
			{
				"name": "User_info_2",
				"event": [
					{
						"listen": "test",
						"script": {
							"exec": [
								"//5. Статус код 200\r",
								"pm.test(\"Status code is 200\", function () {\r",
								"    pm.response.to.have.status(200);\r",
								"});\r",
								"//6. Спарсить response body в json.\r",
								"let responceData = pm.response.json();\r",
								"//7. Спарсить request.\r",
								"let requestData = request.data;\r",
								"\r",
								"//8. Проверить, что json response имеет параметр start_qa_salary\r",
								"pm.test(\"Check property 'start_qa_salary'\", function () {\r",
								"    pm.expect(responceData).to.have.property(\"start_qa_salary\");\r",
								"});\r",
								"\r",
								"//9. Проверить, что json response имеет параметр qa_salary_after_6_months\r",
								"pm.test(\"Check property 'qa_salary_after_6_months'\", function () {\r",
								"    pm.expect(responceData).to.have.property(\"qa_salary_after_6_months\");\r",
								"});\r",
								"\r",
								"//10. Проверить, что json response имеет параметр qa_salary_after_12_months\r",
								"pm.test(\"Check property 'qa_salary_after_12_months'\", function () {\r",
								"    pm.expect(responceData).to.have.property(\"qa_salary_after_12_months\");\r",
								"});\r",
								"\r",
								"//11. Проверить, что json response имеет параметр qa_salary_after_1.5_year\r",
								"pm.test(\"Check property 'qa_salary_after_1.5_year'\", function () {\r",
								"    pm.expect(responceData).to.have.property(\"qa_salary_after_1.5_year\");\r",
								"});\r",
								"\r",
								"//12. Проверить, что json response имеет параметр qa_salary_after_3.5_years\r",
								"pm.test(\"Check property 'qa_salary_after_3.5_years'\", function () {\r",
								"    pm.expect(responceData).to.have.property(\"qa_salary_after_3.5_years\");\r",
								"});\r",
								"\r",
								"//13. Проверить, что json response имеет параметр person\r",
								"pm.test(\"Check property 'person'\", function () {\r",
								"    pm.expect(responceData).to.have.property(\"person\");\r",
								"});\r",
								"\r",
								"//14. Проверить, что параметр start_qa_salary равен salary из request (salary забрать из request.)\r",
								"console.log(requestData)\r",
								"pm.test(\"Check start_qa_salary\", function () {\r",
								"    pm.expect(+responceData.start_qa_salary).to.eql(+requestData.salary);\r",
								"});\r",
								"\r",
								"//15. Проверить, что параметр qa_salary_after_6_months равен salary*2 из request (salary забрать из request.)\r",
								"pm.test(\"Check qa_salary_after_6_months\", function () {\r",
								"    pm.expect(+responceData.qa_salary_after_6_months).to.eql(+requestData.salary*2);\r",
								"});\r",
								"\r",
								"//16. Проверить, что параметр qa_salary_after_12_months равен salary*2.7 из request (salary забрать из request.)\r",
								"pm.test(\"Check qa_salary_after_12_months\", function () {\r",
								"    pm.expect(+responceData.qa_salary_after_12_months).to.eql(+requestData.salary*2.7);\r",
								"});\r",
								"\r",
								"//17. Проверить, что параметр qa_salary_after_1.5_year равен salary*3.3 из request (salary забрать из request.)\r",
								"pm.test(\"Check a_salary_after_1.5_year\", function () {\r",
								"    pm.expect(+responceData['qa_salary_after_1.5_year']).to.eql(+requestData.salary*3.3);\r",
								"});\r",
								"\r",
								"//18. Проверить, что параметр qa_salary_after_3.5_years равен salary*3.8 из request (salary забрать из request.)\r",
								"pm.test(\"Check qa_salary_after_3.5_years\", function () {\r",
								"    pm.expect(+responceData['qa_salary_after_3.5_years']).to.eql(+requestData.salary*3.8);\r",
								"});\r",
								"\r",
								"//19. Проверить, что в параметре person, 1-й элемент из u_name равен salary из request (salary забрать из request.)\r",
								"pm.test(\"Check person salary\", function () {\r",
								"    pm.expect(+responceData.person.u_name[1]).to.eql(+requestData.salary);\r",
								"});\r",
								"\r",
								"//20. Проверить, что что параметр u_age равен age из request (age забрать из request.)\r",
								"pm.test(\"Check person age\", function () {\r",
								"    pm.expect(+responceData.person.u_age).to.eql(+requestData.age);\r",
								"});\r",
								"\r",
								"//21. Проверить, что параметр u_salary_5_years равен salary*4.2 из request (salary забрать из request.)\r",
								"pm.test(\"Check u_salary_5_years\", function () {\r",
								"    pm.expect(+responceData.person.u_salary_5_years).to.eql(+requestData.salary*4.2);\r",
								"});\r",
								"\r",
								"//22. ***Написать цикл который выведет в консоль по порядку элементы списка из параметра person.\r",
								"console.log(responceData.person)\r",
								"\r",
								"for (let prop in responceData.person) {\r",
								"  console.log(\"responceData.person.\" + prop + \" = \" + responceData.person[prop]);\r",
								"}"
							],
							"type": "text/javascript"
						}
					}
				],
				"request": {
					"method": "POST",
					"header": [],
					"body": {
						"mode": "formdata",
						"formdata": [
							{
								"key": "name",
								"value": "{{name}}",
								"type": "text"
							},
							{
								"key": "age",
								"value": "{{age}}",
								"type": "text"
							},
							{
								"key": "salary",
								"value": "{{salary}}",
								"type": "text"
							}
						]
					},
					"url": {
						"raw": "{{url}}:{{port}}/user_info_2",
						"host": [
							"{{url}}"
						],
						"port": "{{port}}",
						"path": [
							"user_info_2"
						]
					}
				},
				"response": []
			}
		]
	}


