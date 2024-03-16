<script setup>
import { ref } from 'vue';
import { useForm } from '@inertiajs/vue3';

const model = useForm({
    name: null,
    email: null,
    phone: null,
    message: null,
});

const form = ref();
const submit = async () => {
    // Periksa apakah ada nilai yang kosong
    if (!model.name || !model.email || !model.phone || !model.message) {
        formError.value = true;
        return;
    }

    try {
        await model.post(route("contact.form"), {});
        success.value = true;
        error.value = false;
    } catch (error) {
        success.value = false;
        error.value = true;
    }
    model.reset();
};

const success = ref(false);
const error = ref(false);
const formError = ref(false);

const onlyAllowNumber = (value) => !value || /^\d+$/.test(value);
</script>

<template>
   <div class="contact">
        <div class="container p-5">
            <div class="title"> 
                <h1 class="font-heading text-gray-700 font-heading text-center text-4xl max-[570px]:text-3xl max-[485px]:text-2xl max-[400px]:text-xl"> 
                    Kontak Kami 
                </h1> 
            </div>
            <div class="sub-title mb-5">
                <h1 class="font-heading text-primary-500 text-center text-xl max-[570px]:text-lg max-[485px]:text-base">
                    Silakan isi form dibawah untuk dapatkan Info detail atau pertanyaan lainnya
                </h1>
            </div>
            <div class="content">
                <n-alert v-if="success" title="Terima Kasih" type="success" closable>
                    Pesan anda telah terkirim, admin akan menghubungi anda.
                </n-alert>
                <n-alert v-if="error" title="Peringatan" type="error" closable>
                    Pesan gagal terkirim, harap di ulangi sekali lagi.
                </n-alert>
                <n-alert v-if="formError" title="Peringatan" type="error" closable>
                    Form harus diisi dengan lengkap.
                </n-alert>
                <n-form 
                    ref="form"
                    @submit.prevent="submit"
                    :model="model"
                    size="large"
                >
                    <n-form-item label="Nama Lengkap">
                    <n-input v-model:value="model.name" type="text" placeholder="Nama"/>
                    </n-form-item>
                    <n-form-item label="Alamat Email">
                    <n-input v-model:value="model.email" type="text" placeholder="Email"/>
                    </n-form-item>
                    <n-form-item label="Nomor WhatsApp">
                    <n-input v-model:value="model.phone" type="text" placeholder="WhatsApp" :allow-input="onlyAllowNumber"/>
                    </n-form-item>
                    <n-form-item label="Pesan">
                    <n-input v-model:value="model.message" type="textarea" placeholder="Pesan"/>
                    </n-form-item>
                    <div class="mt-4">
                        <n-button attr-type="submit" type="primary" block size="large" strong>
                            Daftar
                        </n-button>
                    </div>
                </n-form>
            </div>
        </div>
   </div>
</template>

<style scoped lang="scss">
.n-alert{
    max-width: 1000px;
    margin: 50px auto;
}
.n-form{
    margin: auto;
    max-width: 1000px;
}
.n-input {
  width: 100%;
  border: solid gray 1px;
  transition: all .3s;

  &:hover{
    border-color: #05A7E7;
  }
  &:focus{
    box-shadow: 0px 0px 5px #05A7E7;
  }
}
.n-button{
    color: #05A7E7;
    width: fit-content;
}
</style>
