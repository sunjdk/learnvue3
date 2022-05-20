<template>
  <div>
    <h2>动态表单</h2>
    <VueForm v-model="formData" :schema="schema"></VueForm>
  </div>
</template>

<script>
import VueForm from '@lljj/vue3-form-element';
export default {
  name: 'Demo',
    components: {
        VueForm
    },
    data() {
        return {
            formData: {},
            schema: {
                type: 'object',
                required: [
                    'userName',
                    'age',
                ],
                properties: {
                    userName: {
                        type: 'string',
                        title: '用户名',
                        default: 'Liu.Jun',
                    },
                    age: {
                        type: 'number',
                        title: '年龄'
                    },
                    bio: {
                        type: 'string',
                        title: '签名',
                        minLength: 10,
                        default: '知道的越多、就知道的越少',
                        'ui:options': {
                            placeholder: '请输入你的签名',
                            type: 'textarea',
                            rows: 1
                        }
                    }
                }
            }
        };
    }
}
</script>

<style>

</style>