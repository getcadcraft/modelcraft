<?php
// SPDX-License-Identifier: Apache-2.0
/**
 * settings.inc — ModelCraft's own panel of the Settings dialog (core/components/app-settings.inc includes it,
 * as the "ModelCraft" tab). modelcraft.js reads and stores the fields (localStorage modelcraft.settings) and
 * resets them on "cc-settings-reset".
 *   keys      Push-pull style (default) / Modeler style (stored "sketchup" / "blender"): shortcut keys and mouse buttons
 *   scroll    auto (default) / mouse (the wheel zooms) / trackpad (two fingers orbit, Shift pans, pinch zooms)
 *   touch2    two fingers pan (default; three orbit) / two fingers orbit (three pan); both pinch-zoom
 *   snap      snap to points, edges and axes (default on; also the Snap button in the status bar)
 *   collide   solids stop where they touch instead of passing through (default on; also the status bar button)
 *   corner    corner indicator: view cube (default) / axis icon / none
 *   orbitAt   orbit about the model point under the cursor ('cursor', default) / the view centre ('centre'); orbitSpeed, panSpeed 0.25–3
 *   (no key) Rendering › Your machine: read-only, filled by compute-mc.js (0.7 CU.1)
 *   bed       3D printer bed for Check for 3D printing: '' (not set, default) / 180 / 220 / 256 / 300 (printprep.js BEDS)
 *   (own key) New models: localStorage modelcraft.template (0.7.1 71.13, model-info.js); File › Model › Preferences… opens this tab
 * Product names here only describe whose controls these resemble (nominative, plain text).
 */
?>
<fieldset class="shell-set" data-mc-settings>
  <legend><?= Lang::e('set.controls') ?></legend>
  <div class="shell-seg mc-set-seg2" role="radiogroup" aria-label="<?= Lang::e('set.controls') ?>">
    <label><input type="radio" name="mcKeys" value="sketchup"> <i class="bi bi-box" aria-hidden="true"></i> <?= Lang::e('set.controls.sketchup') ?></label>
    <label><input type="radio" name="mcKeys" value="blender"> <i class="bi bi-badge-3d" aria-hidden="true"></i> <?= Lang::e('set.controls.blender') ?></label>
  </div>
  <p class="shell-hint-text" data-mc-keys-hint></p>
</fieldset>
<fieldset class="shell-set">
  <legend><?= Lang::e('set.scroll') ?></legend>
  <div class="shell-seg" role="radiogroup" aria-label="<?= Lang::e('set.scroll') ?>">
    <label><input type="radio" name="mcScroll" value="auto"> <i class="bi bi-magic" aria-hidden="true"></i> <?= Lang::e('set.scroll.auto') ?></label>
    <label><input type="radio" name="mcScroll" value="mouse"> <i class="bi bi-mouse" aria-hidden="true"></i> <?= Lang::e('set.scroll.mouse') ?></label>
    <label><input type="radio" name="mcScroll" value="trackpad"> <i class="bi bi-hand-index" aria-hidden="true"></i> <?= Lang::e('set.scroll.trackpad') ?></label>
  </div>
  <p class="shell-hint-text"><?= Lang::e('set.scroll.hint') ?></p>
</fieldset>
<fieldset class="shell-set">
  <legend><?= Lang::e('set.touch2') ?></legend>
  <div class="shell-seg mc-set-seg2" role="radiogroup" aria-label="<?= Lang::e('set.touch2') ?>">
    <label><input type="radio" name="mcTouch2" value="pan"> <i class="bi bi-arrows-move" aria-hidden="true"></i> <?= Lang::e('set.touch2.pan') ?></label>
    <label><input type="radio" name="mcTouch2" value="orbit"> <i class="bi bi-arrow-repeat" aria-hidden="true"></i> <?= Lang::e('set.touch2.orbit') ?></label>
  </div>
  <p class="shell-hint-text"><?= Lang::e('set.touch2.hint') ?></p>
</fieldset>
<fieldset class="shell-set">
  <legend><?= Lang::e('set.snap') ?></legend>
  <label class="shell-check"><input type="checkbox" name="mcSnap"> <?= Lang::e('set.snap.snap') ?></label>
  <label class="shell-check"><input type="checkbox" name="mcCollide"> <?= Lang::e('set.snap.collide') ?></label>
  <p class="shell-hint-text"><?= Lang::e('set.snap.hint') ?></p>
</fieldset>
<fieldset class="shell-set">
  <legend><?= Lang::e('set.corner') ?></legend>
  <div class="shell-seg" role="radiogroup" aria-label="<?= Lang::e('set.corner') ?>">
    <label><input type="radio" name="mcCorner" value="cube"> <i class="bi bi-box" aria-hidden="true"></i> <?= Lang::e('set.corner.cube') ?></label>
    <label><input type="radio" name="mcCorner" value="axes"> <i class="bi bi-arrows-move" aria-hidden="true"></i> <?= Lang::e('set.corner.axes') ?></label>
    <label><input type="radio" name="mcCorner" value="none"> <i class="bi bi-slash-circle" aria-hidden="true"></i> <?= Lang::e('set.corner.none') ?></label>
  </div>
  <p class="shell-hint-text"><?= Lang::e('set.corner.hint') ?></p>
</fieldset>
<?php /* 0.7.1 MC-ORBIT-CURSOR: orbit about the point under the cursor (on by default) and the orbit / pan speeds (0.25–3, 1 = as before) */ ?>
<fieldset class="shell-set">
  <legend><?= Lang::e('set.nav') ?></legend>
  <label class="shell-check"><input type="checkbox" name="mcOrbitAt"> <?= Lang::e('set.nav.cursor') ?></label>
  <div class="shell-row">
    <label for="mc-set-orbit-speed"><?= Lang::e('set.nav.orbit_speed') ?></label>
    <span class="shell-range"><input type="range" id="mc-set-orbit-speed" name="mcOrbitSpeed" min="0.25" max="3" step="0.25"><output for="mc-set-orbit-speed" class="tabular" data-mc-out="orbitSpeed"></output></span>
  </div>
  <div class="shell-row">
    <label for="mc-set-pan-speed"><?= Lang::e('set.nav.pan_speed') ?></label>
    <span class="shell-range"><input type="range" id="mc-set-pan-speed" name="mcPanSpeed" min="0.25" max="3" step="0.25"><output for="mc-set-pan-speed" class="tabular" data-mc-out="panSpeed"></output></span>
  </div>
  <p class="shell-hint-text"><?= Lang::e('set.nav.hint') ?></p>
</fieldset>
<fieldset class="shell-set">
  <legend><?= Lang::e('set.printbed') ?></legend>
  <div class="shell-seg" role="radiogroup" aria-label="<?= Lang::e('set.printbed') ?>">
    <?php foreach (['', '180', '220', '256', '300'] as $__b): /* printprep.js BEDS: sizes only */ ?>
      <label><input type="radio" name="mcBed" value="<?= e($__b) ?>"> <?= Lang::e('set.printbed.' . ($__b === '' ? 'none' : $__b)) ?></label>
    <?php endforeach; ?>
  </div>
  <p class="shell-hint-text"><?= Lang::e('set.printbed.hint') ?></p>
</fieldset>
<?php /* 0.7.1 71.13: New models start from the open model's units, display and location (localStorage modelcraft.template; model-info.js) */ ?>
<fieldset class="shell-set" data-mc-template>
  <legend><?= Lang::e('set.newmodels') ?></legend>
  <p class="shell-hint-text" data-mc-template-state></p>
  <p class="shell-btns">
    <button type="button" class="btn-line btn-sm-cc" data-mc-template-save><?= Lang::e('set.newmodels.save') ?></button>
    <button type="button" class="btn-line btn-sm-cc" data-mc-template-clear><?= Lang::e('set.newmodels.clear') ?></button>
  </p>
  <p class="shell-hint-text"><?= Lang::e('set.newmodels.hint') ?></p>
</fieldset>
<?php /* 0.7: the first-model tour (the guided first model, 0.6 LC.21): again now, and whether it starts by itself the first time */ ?>
<fieldset class="shell-set">
  <legend><?= Lang::e('set.tour') ?></legend>
  <p><button type="button" class="btn-line btn-sm-cc" data-set-tour><?= Lang::e('set.tour.again') ?></button></p>
  <p class="shell-hint-text"><?= Lang::e('set.tour.hint') ?></p>
  <label class="shell-check"><input type="checkbox" name="mcTourAuto" data-tour-auto> <?= Lang::e('set.tour.auto') ?></label>
  <p class="shell-hint-text"><?= Lang::e('set.tour.auto.hint') ?></p>
</fieldset>
<?php /* 0.7 CU.1 (session compute): what this machine can render with; compute-mc.js fills it from compute/probe.js */ ?>
<fieldset class="shell-set" data-compute-set>
  <legend><?= Lang::e('compute.set.title') ?></legend>
  <p class="shell-hint-text"><strong><?= Lang::e('compute.card.title') ?></strong><br><?= Lang::e('compute.card.lede') ?></p>
  <div data-compute-card><p class="shell-hint-text"><?= Lang::e('compute.card.wait') ?></p></div>
  <?php /* 0.7 CU.7: other computers on the network — filled only inside CadCraft Studio, which can find them (lan-ui.js) */ ?>
  <div data-compute-lan hidden></div>
</fieldset>
<?php /* AI assistants and scripts (0.4 part 2 X.7, session agents): host.js fills this with Settings › Assistants (off by default) */ ?>
<div data-assistants-settings></div>
