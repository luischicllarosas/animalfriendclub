<template>
	<div>
		<div>
			<v-btn @click="status = true" tile color="primary"> <v-icon left>mdi-plus</v-icon> Post </v-btn>
		</div>
		<v-overlay :value="status">
			<v-btn @click="status = false" icon>
				<v-icon>mdi-close</v-icon>
			</v-btn>

			<v-card width="640" light class="px-5">
				<v-card-title>Nuevo post</v-card-title>

				<!-- Form -->
				<v-text-field filled v-model="Form.title" label="Titulo" required counter="50"></v-text-field>
				<v-textarea filled label="Contenido" auto-grow counter="250"></v-textarea>
				<v-file-input show-size counter placeholder="Selecciona hasta 3 imagenes" multiple prepend-icon="mdi-paperclip" accept="image/*">
					<template v-slot:selection="{ text }">
						<v-chip small label color="deep-purple accent-4" class="white--text">
							{{ text }}
						</v-chip>
					</template>
				</v-file-input>
				<!-- end Form -->
				<v-card-actions>
					<v-btn @click="createNewPost" color="deep-purple accent-4 white--text">Crear</v-btn>
				</v-card-actions>
			</v-card>
		</v-overlay>
	</div>
</template>

<script>
export default {
	data() {
		return {
			// Modal
			status: false,
			// Form
			Form: {
				title: "",
				content: "",
				url: [],
			},
			Errors: [" "],
		};
	},
	methods: {
		createNewPost() {
			if (Errors) return false;
			const fd = new FormData();
			fd.append("usuario_id", this.usu_id);
			fd.append("file", this.file, this.file.name);
			fd.append("description", this.descripcion);
		},
	},
	watch: {
		Form: {
			handle() {},
			deep: true,
		},
	},
};
</script>

<style lang="sass" scoped></style>
