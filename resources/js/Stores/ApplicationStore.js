import { defineStore } from "pinia";
import { lightTheme, darkTheme } from "naive-ui";
import { SecurityUtility } from "@/Utilities/SecurityUtility";
import { LocalStorageUtility } from "@/Utilities/LocalStorageUtility";
import { ref, watch } from "vue";

export const useApplicationStore = defineStore('application', () => {
    const theme = ref(lightTheme);
    const loadingStack = ref(0);
    const isSidebarExpanded = ref(false);
    const isSidebarHovered = ref(false);
    const isSidebarContentExpanded = ref(false);

    const themeOverrides = ref({
        common: {
            primaryColor: "#05A7E7",
            primaryColorHover: "#05A7E7",
            primaryColorPressed: "#05A7E7",
            primaryColorSuppl: "#05A7E7",
        },
    })

    function increaseLoadingStack() {
        loadingStack.value++;
    }

    function decreaseLoadingStack() {
        loadingStack.value--;
    }

    function setTheme(newTheme) {
        LocalStorageUtility.set(
            SecurityUtility.encryptedLocalStorageKeys.theme,
            newTheme.name == "dark" ? "dark" : "light"
        )

        theme.value = newTheme;
    }

    function setIsSidebarExpanded(value) {
        LocalStorageUtility.set(
            SecurityUtility.encryptedLocalStorageKeys.isSidebarExpanded,
            // 1 or 0 because local storage only stores strings
            value ? '1' : '0'
        )

        isSidebarExpanded.value = value;
    }

    function setIsSidebarHovered(value) {
        isSidebarHovered.value = value;
        if (!value) {
            LocalStorageUtility.set(
                SecurityUtility.encryptedLocalStorageKeys.isSidebarContentExpanded,
                // 1 or 0 because local storage only stores strings
                '0'
            )
        }
    }


    watch(() => isSidebarExpanded.value, (value) => {
        if (!value) {
            setTimeout(() => {
                isSidebarContentExpanded.value = isSidebarExpanded.value;
            }, 200)
        } else {
            isSidebarContentExpanded.value = value;
        }
    });

    watch(() => isSidebarHovered.value, (value) => {
        if (isSidebarExpanded.value) {
            isSidebarContentExpanded.value = true;
            return;
        }

        if (!value) {
            isSidebarContentExpanded.value = false;
        } else {
            setTimeout(() => {
                if (isSidebarExpanded.value || isSidebarHovered.value) {
                    isSidebarContentExpanded.value = true;
                }
            }, 200)
        }
    })

    watch(() => isSidebarContentExpanded.value, (value) => {
        LocalStorageUtility.set(
            SecurityUtility.encryptedLocalStorageKeys.isSidebarContentExpanded,
            // 1 or 0 because local storage only stores strings
            value ? '1' : '0'
        )
    })

    watch(() => theme.value, () => {
        if (theme.value.name == "dark") {
            document.body.classList.add("dark");
            document.documentElement.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
            document.documentElement.classList.remove("dark");
        }
    }, {
        immediate: true
    });

    function setup() {
        var _isSidebarExpanded = LocalStorageUtility.get(SecurityUtility.encryptedLocalStorageKeys.isSidebarExpanded);
        var _theme = LocalStorageUtility.get(SecurityUtility.encryptedLocalStorageKeys.theme);
        var _isSidebarContentExpanded = LocalStorageUtility.get(SecurityUtility.encryptedLocalStorageKeys.isSidebarContentExpanded);

        if (typeof _isSidebarExpanded === "string") {
            isSidebarExpanded.value = _isSidebarExpanded == "1";
            isSidebarContentExpanded.value = _isSidebarExpanded == "1";
        }

        if (typeof _isSidebarContentExpanded === "string") {
            isSidebarContentExpanded.value = _isSidebarExpanded == "1" || _isSidebarContentExpanded == "1";
        }

        if (typeof _theme === "string") {
            theme.value = _theme == "dark" ? darkTheme : lightTheme;
        }
    }

    function destroy() {
        LocalStorageUtility.delete(SecurityUtility.encryptedLocalStorageKeys.isSidebarExpanded);
        LocalStorageUtility.delete(SecurityUtility.encryptedLocalStorageKeys.theme);
        LocalStorageUtility.delete(SecurityUtility.encryptedLocalStorageKeys.isSidebarContentExpanded);
    }

    return {
        theme,
        loadingStack,
        isSidebarExpanded,
        isSidebarHovered,
        isSidebarContentExpanded,

        increaseLoadingStack,
        decreaseLoadingStack,
        setTheme,
        setIsSidebarExpanded,
        setIsSidebarHovered,

        themeOverrides,

        setup,
        destroy
    }
})
