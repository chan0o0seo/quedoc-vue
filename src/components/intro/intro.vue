<template>
    <div class = "team-div">
        <p class="team">팀원소개</p>
    </div>
    <v-card
        rounded="0"
        theme="dark"
        flat
    >
        <v-window v-model="onboarding">
            <v-window-item
                v-for="(item, index) in items"
                :key="`card-${index}`"
                :value="index + 1"
            >
                <v-card
                    class="d-flex justify-center align-center"
                    height="200"
                >
                    <span class="text-h2">
                        {{ item }}
                    </span>
                </v-card>
            </v-window-item>
        </v-window>

        <v-card-actions class="justify-space-between">
            <v-btn
                icon="mdi-chevron-left"
                variant="plain"
                @click="prev"
            ></v-btn>
            <v-item-group
                v-model="onboarding"
                class="text-center"
                mandatory
            >
                <v-item
                    v-for="(item, index) in items"
                    :key="`btn-${index}`"
                    v-slot="{ isSelected, toggle }"
                    :value="index + 1"
                >
                    <v-btn
                        :variant="isSelected ? 'outlined' : 'text'"
                        icon="mdi-record"
                        @click="toggle"
                    ></v-btn>
                </v-item>
            </v-item-group>
            <v-btn
                icon="mdi-chevron-right"
                variant="plain"
                @click="next"
            ></v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    data: () => ({
        items: ['서찬영', '박동휘', '김기성', '김지원', '정지수'],
        onboarding: 1,
    }),

    methods: {
        next () {
            this.onboarding = this.onboarding + 1 > this.items.length
                ? 1
                : this.onboarding + 1
        },
        prev () {
            this.onboarding = this.onboarding - 1 <= 0
                ? this.items.length
                : this.onboarding - 1
        },
    },
}
</script>

<style scoped>
.team {
    font-size: xx-large;
}
.team-div {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
}
</style>