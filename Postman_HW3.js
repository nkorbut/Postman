{
		"info": {
			"_postman_id": "e2643f87-39d0-4f30-8f2e-996f62cdc7b4",
			"name": "hmw_1",
			"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
		},
		"item": [
			{
				"name": "11",
				"event": [
					{
						"listen": "test",
						"script": {
							"exec": [
								"let tt2 = {\r",
								"    \"age\": \"22\",\r",
								"    \"family\": {\r",
								"        \"children\": [\r",
								"            [\r",
								"                \"Alex\",\r",
								"                24\r",
								"            ],\r",
								"            [\r",
								"                \"Kate\",\r",
								"                12\r",
								"            ]\r",
								"        ],\r",
								"        \"u_salary_1_5_year\": 4000\r",
								"    },\r",
								"    \"name\": \"Arina\",\r",
								"    \"salary\": 1000\r",
								"}\r",
								"\r",
								"// let test_arr = [1,2]\r",
								"// pm.test(\"test_1\", function () {\r",
								"//     pm.expect(test_arr).to.deep.equal([1,2]);\r",
								"// });\r",
								"\r",
								"pm.test(\"test_2\", function () {\r",
								"    pm.expect(tt2).to.have.property(\"age\");\r",
								"});\r",
								"\r",
								"// Равна ли зп 1000\r",
								"pm.test(\"test_3\", function () {\r",
								"    pm.expect(tt2.salary).to.deep.equal(1000);\r",
								"});\r",
								"\r",
								"pm.test(\"test_4\", function () {\r",
								"    pm.expect(tt2).to.deep.include({\"name\" : \"Arina\"});\r",
								"});\r",
								"\r",
								"\r",
								"//Включает ли 1 элемент \"Alex\"\r",
								"pm.test(\"test_5\", function () {\r",
								"    pm.expect(tt2.family.children[0]).to.deep.include(\"Alex\");\r",
								"});\r",
								"\r",
								"//В правильном ли порядке расположены данные\r",
								"pm.test(\"test_6\", function () {\r",
								"    pm.expect(tt2.family.children[0]).to.have.ordered.members([\"Alex\", 24]);\r",
								"});\r",
								"\r",
								"//Проверка на тип данных\r",
								"pm.test(\"test_7\", function () {\r",
								"    pm.expect(tt2.family.children[1][0]).to.be.a(\"String\");\r",
								"});\r",
								"\r",
								"pm.test(\"test_9\", function () {\r",
								"    pm.expect(tt2.family.children[1]).to.be.an(\"Array\").that.include(12);\r",
								"});\r",
								"let arr_2 = [1,2,3,4,5,6,7,8]\r",
								"pm.test(\"test_8\", function () {\r",
								"    pm.expect(arr_2).to.eql([1,2,3,4,5,6,7,8]);\r",
								"});"
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
								"value": "Arina",
								"type": "text"
							},
							{
								"key": "age",
								"value": "22",
								"type": "text"
							},
							{
								"key": "salary",
								"value": "1000",
								"type": "text"
							},
							{
								"key": "auth_token",
								"value": "/s34lfgbj/Vadim/jjd909/4594kjkWpqc94123r23r3r436324evny",
								"type": "text"
							}
						]
					},
					"url": {
						"raw": "http://162.55.220.72:5005/get_test_user",
						"protocol": "http",
						"host": [
							"162",
							"55",
							"220",
							"72"
						],
						"port": "5005",
						"path": [
							"get_test_user"
						]
					}
				},
				"response": []
			},
			{
				"name": "ER_1",
				"request": {
					"method": "GET",
					"header": [],
					"url": {
						"raw": "http://162.55.220.72:5005/get_method?name=Arina&age=22",
						"protocol": "http",
						"host": [
							"162",
							"55",
							"220",
							"72"
						],
						"port": "5005",
						"path": [
							"get_method"
						],
						"query": [
							{
								"key": "name",
								"value": "Arina"
							},
							{
								"key": "age",
								"value": "22"
							}
						]
					}
				},
				"response": []
			},
			{
				"name": "ER_2",
				"request": {
					"method": "POST",
					"header": [],
					"body": {
						"mode": "formdata",
						"formdata": [
							{
								"key": "name",
								"value": "Arina",
								"type": "text"
							},
							{
								"key": "age",
								"value": "22",
								"type": "text"
							},
							{
								"key": "salary",
								"value": "300",
								"type": "text"
							}
						]
					},
					"url": {
						"raw": "http://162.55.220.72:5005/user_info_3",
						"protocol": "http",
						"host": [
							"162",
							"55",
							"220",
							"72"
						],
						"port": "5005",
						"path": [
							"user_info_3"
						]
					}
				},
				"response": []
			},
			{
				"name": "ER_3",
				"request": {
					"method": "GET",
					"header": [],
					"url": {
						"raw": "http://162.55.220.72:5005/object_info_1?name=Arina&age=22&weight=59",
						"protocol": "http",
						"host": [
							"162",
							"55",
							"220",
							"72"
						],
						"port": "5005",
						"path": [
							"object_info_1"
						],
						"query": [
							{
								"key": "name",
								"value": "Arina"
							},
							{
								"key": "age",
								"value": "22"
							},
							{
								"key": "weight",
								"value": "59"
							}
						]
					}
				},
				"response": []
			},
			{
				"name": "ER_4",
				"request": {
					"method": "GET",
					"header": [],
					"url": {
						"raw": "http://162.55.220.72:5005/object_info_2?name=Arina&age=22&salary=300",
						"protocol": "http",
						"host": [
							"162",
							"55",
							"220",
							"72"
						],
						"port": "5005",
						"path": [
							"object_info_2"
						],
						"query": [
							{
								"key": "name",
								"value": "Arina"
							},
							{
								"key": "age",
								"value": "22"
							},
							{
								"key": "salary",
								"value": "300"
							}
						]
					}
				},
				"response": []
			},
			{
				"name": "ER_6",
				"request": {
					"method": "GET",
					"header": [],
					"url": {
						"raw": "http://162.55.220.72:5005/object_info_4?name=Arina&age=22&salary=300",
						"protocol": "http",
						"host": [
							"162",
							"55",
							"220",
							"72"
						],
						"port": "5005",
						"path": [
							"object_info_4"
						],
						"query": [
							{
								"key": "name",
								"value": "Arina"
							},
							{
								"key": "age",
								"value": "22"
							},
							{
								"key": "salary",
								"value": "300"
							}
						]
					}
				},
				"response": []
			},
			{
				"name": "ER_5",
				"request": {
					"method": "GET",
					"header": [],
					"url": {
						"raw": "http://162.55.220.72:5005/object_info_3?name=Arina&age=22&salary=300",
						"protocol": "http",
						"host": [
							"162",
							"55",
							"220",
							"72"
						],
						"port": "5005",
						"path": [
							"object_info_3"
						],
						"query": [
							{
								"key": "name",
								"value": "Arina"
							},
							{
								"key": "age",
								"value": "22"
							},
							{
								"key": "salary",
								"value": "300"
							}
						]
					}
				},
				"response": []
			},
			{
				"name": "ER_7",
				"request": {
					"method": "POST",
					"header": [],
					"body": {
						"mode": "formdata",
						"formdata": [
							{
								"key": "name",
								"value": "Arina",
								"type": "text"
							},
							{
								"key": "age",
								"value": "22",
								"type": "text"
							},
							{
								"key": "salary",
								"value": "300",
								"type": "text"
							}
						]
					},
					"url": {
						"raw": "http://162.55.220.72:5005/user_info_2",
						"protocol": "http",
						"host": [
							"162",
							"55",
							"220",
							"72"
						],
						"port": "5005",
						"path": [
							"user_info_2"
						]
					}
				},
				"response": []
			},
			{
				"name": "Login",
				"event": [
					{
						"listen": "test",
						"script": {
							"exec": [
								"let jsonData = pm.response.json();\r",
								"let token = jsonData.token;\r",
								"\r",
								"pm.environment.set(\"token\", token);"
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
								"key": "login",
								"value": "rn_strshchnk",
								"type": "text"
							},
							{
								"key": "password",
								"value": "eDbbYE58",
								"type": "text"
							}
						]
					},
					"url": {
						"raw": "http://162.55.220.72:5005/login",
						"protocol": "http",
						"host": [
							"162",
							"55",
							"220",
							"72"
						],
						"port": "5005",
						"path": [
							"login"
						]
					}
				},
				"response": []
			},
			{
				"name": "Test_pet_info",
				"request": {
					"method": "POST",
					"header": [],
					"body": {
						"mode": "formdata",
						"formdata": [
							{
								"key": "name",
								"value": "Pupsik",
								"type": "text"
							},
							{
								"key": "age",
								"value": "3",
								"type": "text"
							},
							{
								"key": "weight",
								"value": "8",
								"type": "text"
							},
							{
								"key": "auth_token",
								"value": "{{token}}",
								"type": "text"
							}
						]
					},
					"url": {
						"raw": "{{url}}:{{port}}/test_pet_info",
						"host": [
							"{{url}}"
						],
						"port": "{{port}}",
						"path": [
							"test_pet_info"
						]
					}
				},
				"response": []
			},
			{
				"name": "New_data",
				"event": [
					{
						"listen": "test",
						"script": {
							"exec": [
								"let jsonData = pm.response.json();\r",
								"\r",
								" pm.test(\"Status code is 200\", function () {\r",
								"    pm.response.to.have.status(200);\r",
								"});\r",
								"\r",
								"let user_name = jsonData.name;\r",
								"pm.test(\"Your test name\", function () {\r",
								"\r",
								"    pm.expect(user_name).to.eql(\"Arina\");\r",
								"});\r",
								"\r",
								"let salary_2 = +jsonData.salary[1];\r",
								"pm.test(\"Salary after 2 years\", function () {\r",
								"\r",
								"    pm.expect(salary_2).to.eql(1000);\r",
								"});"
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
							},
							{
								"key": "auth_token",
								"value": "{{token}}",
								"type": "text"
							}
						]
					},
					"url": {
						"raw": "{{url}}:{{port}}/new_data",
						"host": [
							"{{url}}"
						],
						"port": "{{port}}",
						"path": [
							"new_data"
						]
					}
				},
				"response": []
			}
		]
	}


