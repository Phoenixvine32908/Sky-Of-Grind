ServerEvents.tags("item", event => {
    const quarkTechArmor = [
        "gtceu:quarktech_helmet",
        "gtceu:quarktech_chestplate",
        "gtceu:advanced_quarktech_chestplate",
        "gtceu:quarktech_leggings",
        "gtceu:quarktech_boots"
    ]
    event.add("ad_astra:space_resistant_armor", quarkTechArmor)
    event.add("ad_astra:freeze_resistant_armor", quarkTechArmor)
    event.add("ad_astra:heat_resistant_armor", quarkTechArmor)
     const advAEArmor = [
        "advanced_ae:quantum_helmet",
        "advanced_ae:quantum_chestplate",
        "advanced_ae:quantum_leggings",
        "advanced_ae:quantum_boots"
    ]
    event.add("ad_astra:space_resistant_armor", advAEArmor)
    event.add("ad_astra:freeze_resistant_armor", advAEArmor)
    event.add("ad_astra:heat_resistant_armor", advAEArmor)
})
