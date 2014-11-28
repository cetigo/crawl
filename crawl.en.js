lang = {
	intro0 : 'The rain is getting heavier.<br>Sudden impact, your head hurts.<br>Darkness entraps you.<br>',
	intro1 : "The rock soil is cold.<br>You get up cautiously.<br>No light.<br>Nobody.",
	intro2 : 'Your retinas adapt.<br>An abandoned mineshaft.<br>A dead torch hangs on the wall.<br>Escape.',
	intro3 : '<br>You become <em>conscious</em>.<br><br><span id="text-trigger1">Treat wounds</span>',
	intro4 : 'A torn piece of your shirt.<br><i>Provisional, <em>not disinfected.</em></i><br>Trembling pain.<br>The bleed stops.<br>',
	intro5a : 'You look around the chamber.<br>Empty. Supported by wooden pillars.<br><i>There are ',
	intro5b : ' surrounding rooms.<br><i>W A S D.</i>',

	enemyStart : ' emerges.',
	roomChest : '<br>You find a <span id="text-loader2" data-text="Chest">Chest</span>.',
	roomChestLocked : '<br>You find a Chest.<br>It is locked.',
	roomChestLockedOption : '<br>You find a Chest.<br>It is locked.<br><br><span id="text-trigger1">Unlock</span>',
	roomChestUnlocked : '<br>The Chest is opened.<br>',
	roomRelic : '<br>An old relic shrine stands in the center of this chamber.',
	roomFire : '<br>The crackling fire illuminates the chamber.<br>Resting next to the fireplace regenerates you.',
	roomFireNow : '<br>The crackling fire illuminates the chamber.<br>You <span id="text-loader" data-text="recover">recover</span> at the fireplace...',
	roomFireDown : '<br>The fireplace is dead.',
	roomItem : '<br>You <span id="text-loader2" data-text="notice">notice</span> an object on the platform.',
	roomItemFound : '<br>You reach the platform<br>',
	roomItemDone : '<br>The platform is empty.',
	roomEmpty : '<br>The chamber is empty...',
	roomEmptyDoor : '<br>You notice a trapdoor in the floor.<br><br><span id="text-trigger1">Descend</span>',

	newFloor1 : "This door leads further into the depths.<br>You wouldn't be able to return.<br>There was no other way.<br>Is there an end to the darkness?",
	newFloor2 : 'Another trapdoor, deeper into the mining complex.<br>Ensnared by gloom and biting cold.<br>Was there an elevator at the end of this mine?<br>Misery awaits.',
	newFloor3 : 'The third door uncoveres a gothic tile floor.<br><em>Catacombs</em> under the mining complex.<br>Both a chance and a risk, but without alternatives.<br>You climb downwards.',
	newFloor4 : 'The hatch clicks open.<br><i>The path is painful but necessary</i>,<br>you reiterate stoically.<br>Hopefully not in vain.',

	fightCrit : 'Critical!',
	fightEffective : ' Effective!',
	fightBlock : 'Blocked!',
	fightWon : 'Fight won!',
	fightPunch : 'Punch',
	fightFlee : 'Flee',
	fightPotion : 'Potion',

	roomEnemyDead : ' lies dead aground.<br>',
	itemObtained : ' received!',
	playerSpellLearned : ' learned!',
	playerHealthUp : 'Health increased!',
	playerDamageUp : 'Damage increased!',
	playerPunchUp : '<i>Punch</i> upgraded!',
	gameOver : "You've met with a terrible fate,<br>haven't you?<br><br><span id='text-trigger1' onclick='location.reload(true)'>Try again</span>",
	alphaOver : 'Thank you for testing the <em>CRAWL</em> &alpha;!<br>This version ends here.',

	enemy0 : 'Grey Rat',
	enemy1 : 'Black Rat',
	enemy2 : 'Dark Rat',
	enemy3 : 'Black Spider',
	enemy4 : 'Toxic Spider',
	enemy5 : 'Red Boar',

	enemy6 : 'Rattlesnake',
	enemy7 : 'Omen',
	enemy8 : 'Constrictor',
	enemy9 : 'Black Bat',
	enemy10 : 'Crimson Bat',
	enemy11 : 'Weak Banshee',
	enemy12 : 'Vicious Ghoul',
	enemy13 : 'Dark Omen',


	enemy99 : 'Tote Assel',

	//-- Items --

	consumable1 : 'Potion',
	consumable0 : 'Key',
	consumable2 : 'Painkiller',

	//Items Minenschacht

	upgrade0 : 'Care Package', //HP up
	upgrade1 : 'Dulled Blade', //Dmg up
	upgrade2 : 'Shadowfur', //HP up

	spellItem0 : 'Rust Toxin', //-> Verwunden
	spellItem1 : 'Shielding Plank', //-> Block
	spellItem2 : 'Steel Hammer', //-> Bruch
	spellItem3 : 'Blow Torch', //-> Verbrennen

	//Items Katakomben

	consumable3 : 'Injection', //Neues Consumable, Zufälliger Effekt. Ersetzt Trank.
	consumable4 : 'Morphine', //Neues Consumable, sobald es einmal genommen wird sind SPKs nicht mehr wirksam (ersetzt SPKs). Der Spieler wird dazu gezwungen, Morphium zu nehmen. SPK dropchance verringert sich deutlich nach erster Morphiumeinnahme. (SPKs braucht man immernoch für Reliktschreine und Geisteskranke)

	upgrade3 : 'Brass Knuckles', //Erhöht Schlagschaden auf 1.5, gibt Schlag Zersetzungschance.
	upgrade4 : 'Skullhelmet', //HP up
	upgrade5 : 'MRE', //HP up

	spellItem4 : 'Barbed Club', //-> Entstellen
	spellItem5 : 'HV-Battery', //-> Schock

	gItem0 : 'Bear Trap', //Neuer Itemtyp: G-Item, hält Gegner in Bärenfalle fest, beendet Kampf, cleart den Raum, droppt aber kein Item
	gItem1 : 'Flashlight', //G-Item, Blendet den Gegner, kann für 3 Runden nicht angreifen

	trinket0 : 'Leather Armor', //Neuer Itemtyp: Trinket. Hat passiven Effekt. Panzerweste: 25% Blockchance vs phys. angriff
	trinket1 : 'Acid Affinity', //Trinket. Spritzen zeigen an ob positiv oder negativ. Einmal genommene Spritzen werden gespeichert

	//Items Höhlen
	//Keine neuen Consumables, größere Map
	gItem2 : '.44 Magnum', //G-Item, Onehit
	gItem3 : 'Blood Transfusion', //G-Item, nur verwendbar unter 50% gegner. HP, tötet sofort, heilt Spieler um fightMaxHealth

	spellItem6 : 'High Frequency Generator', //-> Schallwelle
	spellItem7 : 'HV-Generator', //-> Aufladung
	spellItem8 : 'Flare Gun', //-> Blenden

	itemPainkillerTip : 'Press V to consume Painkiller.',

	spell0 : 'Punch', //Phys, Dmg
	spell1 : 'Block', //Phys, Dmg und Block
	spell2 : 'Break', //Phys, Dmg und Physschwäche
	spell3 : 'Bite', //Bio, Dmg und Heal
	spell4 : 'Stun', //Phys, Dmg und Stun
	spell5 : 'Zersetzen', //Bio
	spell6 : 'Wound', //Bio, DoT
	spell7 : 'Blind', //Feuer, Dmg und Dunkelzerstörung
	spell8 : 'Burn', //Feuer, DoT
	spell9 : 'Deface', //Phys, DoT und Stromschwäche
	spell10 : 'Shock', //Tesla, Dmg und DoTChance
	spell11 : 'Soundwave', //Unq, Stun und Stalagmitenchance
	spell12 : 'Overcharge', //Tesla, 1 Runde aufladen, dann viel Schaden und DoT

	buff0 : '',
	buff1 : 'Block',
	buff2 : 'Counterstrike',

	debuff0 : '',
	debuff1 : 'Bleeding',
	debuff2 : 'Broken',
	debuff3 : 'Blinded',
	debuff4 : 'Burn',
	debuff5 : 'Spiketrap',
	debuff6 : 'Stunned',

	floorName0 : 'Mining Complex',
	floorName1 : 'Catacombs',
	floorName2 : 'Caves',
	floorName3 : 'Termina',
	floorName4 : 'Purgatory',
	floorName5 : 'Limbus',
	floorName6 : 'Babylon',

	enemySpell0 : 'Scratch',
	enemySpell1 : 'Bite',
	enemySpell2 : 'Chargeup',
	enemySpell3 : 'Heal',
	enemySpell4 : 'Flinch',
	enemySpell5 : 'Suffocate',
	enemySpell6 : 'Envenom',
	enemySpell7 : 'Wound',
	enemySpell8 : 'Curse',
}