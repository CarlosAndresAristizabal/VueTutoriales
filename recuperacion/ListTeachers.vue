<template>
	<!-- html -->
	<div class="counterDuo">
		<!-- Formulario mejorado con accesibilidad -->
		<div class="containerForm separador">
			<section class="formAddTeacher">
				<h3 class="title">ADD TEACHER</h3>
				<form @submit="saveTeacher">
					<!-- campo de ID -->
					<div class="input-container">
						<input
							id="teacherId"
							type="text"
							v-model.trim="formData.id"
							placeholder=""
							required
							aria-required="true" />
						<label for="teacherId">Id:</label>
					</div>
					<!-- campo nombre -->
					<div class="input-container">
						<input
							id="teacherName"
							type="text"
							v-model.trim="formData.name"
							placeholder=""
							required
							aria-required="true" />
						<label for="teacherName">Name:</label>
					</div>
					<!-- campo apellido -->
					<div class="input-container">
						<input
							id="teacherLastname"
							type="text"
							v-model.trim="formData.lastname"
							placeholder=""
							required
							aria-required="true" />
						<label for="teacherLastname"
							>Lastname :
						</label>
					</div>
					<!-- campo de materias -->
					<div class="input-container">
						<input
							id="subjectsInput"
							type="text"
							v-model.trim="currentSubject"
							placeholder=""
							@keydown.enter="addSubjects" />
						<label for="teacherLastname"
							>Subjects:
						</label>
						<!-- Opcinal el . prevent para agregar materias -->
						<!--Botones para materias  -->
						<div class="button-group">
							<button
								type="button"
								class="post-btn"
								@click="addSubjects"
								:disabled="!currentSubject">
								Add Subject</button
							><button
								type="button"
								class="post-btn danger"
								@click="cleanSubjects">
								Clean All
							</button>
						</div>
					</div>
					<!-- Lista de materias -->
					<div
						v-if="formData.subjects.length"
						class="subjects-list">
						<ul>
							<li
								v-for="(
									subject, index
								) in formData.subjects"
								:key="index">
								{{ subject }}
								<button
									type="button"
									class="eliminarSubjects"
									@click="deleteSubject(index)"
									aria-label="Delete subject">
									❌
								</button>
							</li>
						</ul>
					</div>
					<!-- checkbox de documentación -->

					<div class="from-footer">
						<label class="checkbox-label">
							<input
								type="checkbox"
								v-model="
									formData.documentation
								" />Documentation delivered
						</label>
						<!-- Botones de guardar y limpiar -->
						<div class="button-group">
							<button
								type="button"
								class="post-btn"
								:disabled="isFormInvalid"
								@click="saveTeacher">
								{{
									isEditing ? 'UPDATE' : 'SAVE'
								}}
							</button>
							<button
								type="button"
								class="post-btn danger"
								@click="resetForm">
								CLEAR
							</button>
						</div>
					</div>
				</form>
			</section>
		</div>
		<!-- Lista de profesores -->
		<section class="containerForm">
			<h2>List of Teachers :</h2>
			<!-- Tabla -->
			<div class="table-container">
				<table class="blueTable responsive-table">
					<!-- cabecera -->
					<thead>
						<tr>
							<th scope="col">ID</th>
							<th scope="col">NAME</th>
							<th scope="col">LASTNAME</th>
							<th scope="col">SUBJECTS</th>
							<th scope="col">DOCUMENTATION</th>
							<th scope="col">ACTIONS</th>
						</tr>
					</thead>
					<!-- datos guardados  -->
					<tbody>
						<tr
							v-for="teacher in teachers"
							:key="teacher.id">
							<td>{{ teacher.id }}</td>
							<td>{{ teacher.name }}</td>
							<td>{{ teacher.lastname }}</td>
							<td>
								<ul class="subjects-list">
									<li
										v-for="(
											subject, index
										) in teacher.subjects"
										:key="index">
										{{ subject }}
									</li>
								</ul>
							</td>
							<td>
								<span
									class="status-indicator"
									:class="{
										delivered:
											teacher.documentation,
										pending:
											!teacher.documentation,
									}">
									{{
										teacher.documentation
											? 'delivered'
											: 'Pending'
									}}
								</span>
							</td>
							<td>
								<div class="action-buttons">
									<button
										type="button"
										@click="editTeacher(teacher)"
										class="post-btn success">
										Edit
									</button>
									<button
										type="button"
										@click="
											confirmDelete(teacher.id)
										"
										class="post-btn danger">
										Delete
									</button>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</section>
	</div>
</template>

<script lang="ts" setup>
import {
	onMounted,
	reactive,
	computed,
	ref,
} from 'vue';

interface ITeacher {
	id: string;
	name: string;
	lastname: string;
	subjects: string[];
	documentation: boolean;
}

const teachers = ref<ITeacher[]>([]);
const currentSubject = ref('');
const isEditing = ref(false);
const editingId = ref<string | null>(null);

const formData = reactive<ITeacher>({
	id: '',
	name: '',
	lastname: '',
	subjects: [],
	documentation: false,
});

const isFormInvalid = computed(() => {
	return (
		!formData.id ||
		!formData.name ||
		!formData.lastname ||
		formData.subjects.length === 0
	);
});

const loadTeachers = () => {
	const saved = localStorage.getItem('teachers');
	if (saved) {
		try {
			teachers.value = JSON.parse(saved);
		} catch (error) {
			console.error(
				'Error loading teachers:',
				error
			);
		}
	}
};

const saveTeachers = () => {
	localStorage.setItem(
		'teachers',
		JSON.stringify(teachers.value)
	);
};

const addSubjects = () => {
	if (currentSubject.value.trim()) {
		formData.subjects.push(
			currentSubject.value.trim()
		);
		currentSubject.value = '';
	}
};

const deleteSubject = (index: number) => {
	formData.subjects.splice(index, 1);
};

const cleanSubjects = () => {
	formData.subjects = [];
};

const saveTeacher = () => {
	if (isEditing.value && editingId.value) {
		const index = teachers.value.findIndex(
			(item) => item.id === editingId.value
		);
		if (index !== -1) {
			teachers.value[index] = { ...formData };
		}
	} else {
		if (
			teachers.value.some(
				(element) => element.id === formData.id
			)
		) {
			alert('Teacher ID must be unique!');
			return;
		}
		teachers.value.push({ ...formData });
	}
	saveTeachers();
	resetForm();
};

const editTeacher = (teacher: ITeacher) => {
	Object.assign(formData, teacher);
	editingId.value = teacher.id;
	isEditing.value = true;
};

const confirmDelete = (id: string) => {
	if (
		confirm(
			'Are you sure you want to delete this teacher?'
		)
	) {
		deleteTeacher(id);
	}
};

const deleteTeacher = (id: string) => {
	teachers.value = teachers.value.filter(
		(t) => t.id !== id
	);
	saveTeachers();
};

const resetForm = () => {
	Object.assign(formData, {
		id: '',
		name: '',
		lastname: '',
		subjects: [],
		documentation: false,
	});
	editingId.value = null;
	isEditing.value = false;
	currentSubject.value = '';
};
onMounted(() => {
	loadTeachers();
});
</script>

<style scoped>
/* Containers */
.containerForm {
	width: 98%;
	min-height: 90%;
	display: flex;
	flex-direction: column;
	align-items: center;
	color: whitesmoke;
	padding: 2rem;
}

/* Titles */
.title {
	font-size: 30px;
}

/* Contenedor del formulario */
.formAddTeacher {
	width: 50%;
	text-align: center;
	padding: 90px;
	backdrop-filter: blur(16px) saturate(194%);
	-webkit-backdrop-filter: blur(16px)
		saturate(194%);
	background-color: rgba(17, 25, 40, 0.45);
	border-radius: 12px;
	border: 1px solid rgba(255, 255, 255, 0.125);
}

/* Contenedor del campo */
.input-container {
	position: relative;
	margin-bottom: 1.2rem;
	gap: 20px;
}

/* Estilo de entrada */
.input-container input[type='text'] {
	width: 100%;
	padding: 1rem;
	background: transparent;
	border: none;
	border-bottom: 2px solid #ccc;
	transition: all 0.3s;
	color: #f7f4f4;
}

/* Quitar animación */
input {
	outline: none;
}

/* Cambio de color del hover del botón */
.input-container input:focus,
input-container input:not(:placeholder-shown) {
	border-bottom: 1px solid #4c93ff;
}

/* Estilo de etiqueta */
.input-container label {
	position: absolute;
	top: 20px;
	left: 15px;
	z-index: 1;
	transform: translateY(-50%);
	font-size: 16px;
	animation: moveLabelIn 0.3s ease-in-out;
	transition: all 0.2s;
}

/* Estilo de entrada enfocada */
input:focus ~ label,
input:not(:placeholder-shown) ~ label {
	top: 0;
	left: 15px;
	background: transparent;
	font-size: 12px;
	color: #4c93ff;
	z-index: 10;
	padding: 0 2px;
	animation: moveLabelOut 0.3s ease-in-out;
}

/* Animaciones */
@keyframes moveLabelIn {
	0% {
		top: -15px;
		left: 10px;
		font-size: 12px;
		color: #4c93ff;
	}

	100% {
		top: 10px;
		left: 10px;
		font-size: 16px;
		color: #999;
	}
}

@keyframes moveLabelOut {
	0% {
		top: 10px;
		left: 10px;
		font-size: 16px;
		color: #999;
	}

	100% {
		top: -15px;
		left: 10px;
		font-size: 12px;
		color: #4c93ff;
	}
}

ul {
	text-align: left;
	margin: 5px;
}

.subjects-list li {
	width: max-content;
	background: rgba(76, 147, 255, 0.2);
	padding: 0.3rem 0.8rem;
	border-radius: 20px;
	display: flex;
	align-items: center;
	gap: 0.9rem;
	margin: 5px;
}
.status-indicator {
	display: inline-block;
	padding: 0.25rem 0.75rem;
	border-radius: 20px;
	font-size: 0.875rem;
}
/* Tabla */
table.blueTable {
	border: 1px solid #0594f3;
	background-color: #eeeeee;
	width: 90%;
	text-align: left;
	border-collapse: collapse;
	padding: 0.65rem;
	color: rgb(2, 101, 172);
}

table.blueTable td,
table.blueTable th {
	border: 1px solid #aaaaaa;
	padding: 5px 12px;
	backdrop-filter: blur(6px);
	-webkit-backdrop-filter: blur(6px);
}

table.blueTable tbody td {
	font-size: 13px;
}

table.blueTable tr:nth-child(even) {
	background: #d0e4f55c;
	backdrop-filter: blur(6px);
	-webkit-backdrop-filter: blur(6px);
}

table.blueTable thead {
	background: #1c6ea489;
	background: -moz-linear-gradient(
		top,
		#111928e6 0%,
		#327cad5c 66%,
		#111928e6 100%
	);
	background: -webkit-linear-gradient(
		top,
		#5592bb5c 0%,
		#327cad5c 66%,
		#111928e6 100%
	);
	background: linear-gradient(
		to bottom,
		#1192bbe6 0%,
		#114263e6 66%,
		#111928e6 100%
	);

	border-bottom: 2px solid #e10909;
	backdrop-filter: blur(6px);
	-webkit-backdrop-filter: blur(6px);
}

table.blueTable thead th {
	font-size: 15px;
	font-weight: bold;
	color: #ffffff;
	border-left: 2px solid #0486f8;
	backdrop-filter: blur(6px);
	-webkit-backdrop-filter: blur(6px);
	background: linear-gradient(
		to bottom,
		#1192bbe6 0%,
		#117cade6 66%,
		#112135e6 100%
	);
}

table.blueTable thead th:first-child {
	border-left: none;
	position: sticky;
	left: 0;
	z-index: 5;
	min-width: max-content;
	background: linear-gradient(
		to bottom,
		#1192bbe6 0%,
		#117cade6 66%,
		#112135e6 100%
	);
}

.table-container {
	width: 100%;
	overflow-x: auto;
	position: relative;
	margin: 1rem 0;
}
.responsive-table th:first-child,
.responsive-table td:first-child {
	position: sticky;
	left: 0;
	z-index: 2;
	min-width: max-content;
}
.responsive-table th,
.responsive-table td {
	padding: 1rem;
	text-align: left;
	white-space: nowrap;
	min-width: 120px;
}

.responsive-table th {
	position: sticky;
	top: 0;
	z-index: 3;
}

/* Estilos para scrollbar */
.table-container::-webkit-scrollbar {
	height: 8px;
	width: 8px;
}

.table-container::-webkit-scrollbar-thumb {
	background: rgba(255, 255, 255, 0.59);
	border-radius: 4px;
}
.delivered {
	background: rgba(76, 175, 80, 0.2);
	color: #4caf50;
}

.pending {
	color: #f44336;
	background: rgba(244, 67, 54, 0.2);
}

/* Botones  */
.success {
	margin: 10px;
	background-image: linear-gradient(
		135deg,
		#64f63b,
		#227435
	);
	animation: none;
}
.post-btn:disabled {
	opacity: 0.6;
	cursor: not-allowed;
}
.success:hover {
	transition: all 0.3s ease;
	box-shadow: 0 0 17px rgba(72, 246, 59, 0.5);
}

.danger {
	margin: 10px;
	background-image: linear-gradient(
		135deg,
		#f63b44,
		#742225
	);
	animation: none;
}

.danger:hover {
	transition: all 0.3s ease;
	box-shadow: 0 0 17px rgba(246, 59, 59, 0.5);
}

.eliminarSubjects {
	background: transparent;
	border: none;
	color: red;
	cursor: pointer;
}

.button-group {
	flex-direction: column;
}

.eliminarSubjects:hover {
	text-shadow: 1px 1px 8px red;
	transition: all 0.3s ease;
}

.post-btn {
	animation: none;
}
.action-buttons {
	display: flex;
	gap: 0.5rem;
	justify-content: center;
	align-items: center;
}
@media (max-width: 1450px) {
	.counterDuo {
		flex-direction: column;
	}
	.containerForm {
		padding: 0;
	}
	.formAddTeacher {
		width: 50%;
		padding: 1rem;
	}
	.table-container {
		width: 90%;
	}
	.button-group {
		flex-direction: column;
	}
	.input-container input[type='text'] {
		width: 90%;
		padding: 1rem;
	}
}
</style>
