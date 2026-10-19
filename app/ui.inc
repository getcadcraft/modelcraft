<?php
// SPDX-License-Identifier: Apache-2.0
/**
 * ModelCraft UI (rendered inside app-shell.inc; $app, $__area, $__build and $__manifest are set).
 * Server-rendered: toolbar, panels, value box and status bar. modelcraft.js runs the model.
 * Models open and save on this computer; nothing here posts anywhere.
 *
 *   top     toolbar (role=toolbar, a direct child of <main> so the screen modes hide it)
 *   left    outliner (groups and components in the model) · component definitions
 *   stage   the 3D view (WebGL canvas + a 2D overlay for inference markers and previews)
 *   right   entity info · style (shaded / hidden line / wireframe / x-ray, edges, shadows + sun) · scenes
 *   under   the animation timeline (0.6 LC.10; hidden until Views › Timeline)
 *   bottom  status: inference tip, messages, the value box (Length / Distance / …), Snap and Collide, units
 * Titles and hints show the SketchUp-style keys; modelcraft.js rewrites them when Settings › Controls is
 * Blender style (data-keys-* marks what it rewrites).
 */
Lang::use($__build); echo Lang::bootTag();   // language files (docs/LANG.md); harmless once app-shell.inc does it
/** Lang::e() text whose fills are trusted markup (<kbd>): the text is escaped, then each fill put in. */
$__lx = static function (string $key, array $html): string {
    $mark = [];
    foreach (array_keys($html) as $i => $k) $mark[$k] = "\u{E000}" . $i . "\u{E001}";
    return strtr(Lang::e($key, $mark), array_combine(array_values($mark), array_values($html)));
};
$__tools = [
    'File' => [   // i18n-ignore: the group's key (its aria-label, which the shell's toolbar arrangement saves); the visible name is ui.tb.group.*
        ['act', 'new', 'file-earmark-plus', Lang::t('ui.tool.new'), Lang::t('ui.tool.new.title')],
        ['act', 'open', 'folder2-open', Lang::t('ui.tool.open'), Lang::t('ui.tool.open.title')],
        ['act', 'save', 'download', Lang::t('ui.tool.save'), Lang::t('ui.tool.save.title')],
        ['act', 'import', 'box-arrow-in-down', Lang::t('ui.tool.import'), Lang::t('ui.tool.import.title')],
    ],
    'Draw' => [   // i18n-ignore: group key
        ['tool', 'line', 'slash-lg', Lang::t('ui.tool.line'), Lang::t('ui.tool.line.title')],
        ['tool', 'rect', 'square', Lang::t('ui.tool.rect'), Lang::t('ui.tool.rect.title')],
        ['tool', 'circle', 'circle', Lang::t('ui.tool.circle'), Lang::t('ui.tool.circle.title')],
        ['tool', 'polygon', 'hexagon', Lang::t('ui.tool.polygon'), Lang::t('ui.tool.polygon.title')],
        ['tool', 'arc', 'bezier2', Lang::t('ui.tool.arc'), Lang::t('ui.tool.arc.title')],
        ['tool', 'arcc', 'pie-chart', Lang::t('ui.tool.arcc'), Lang::t('ui.tool.arcc.title')],
        ['tool', 'curve', 'bezier', Lang::t('ui.tool.curve'), Lang::t('ui.tool.curve.title')],
        ['act', 'text3d', 'fonts', Lang::t('ui.tool.text3d'), Lang::t('ui.tool.text3d.title')],
    ],
    'Modify' => [   // i18n-ignore: group key
        ['tool', 'select', 'cursor', Lang::t('ui.tool.select'), Lang::t('ui.tool.select.title')],
        ['tool', 'push', 'box-arrow-up', Lang::t('ui.tool.push'), Lang::t('ui.tool.push.title')],
        ['tool', 'follow', 'arrow-90deg-up', Lang::t('ui.tool.follow'), Lang::t('ui.tool.follow.title')],
        ['tool', 'paint', 'paint-bucket', Lang::t('ui.tool.paint'), Lang::t('ui.tool.paint.title')],
        ['tool', 'offset', 'bounding-box', Lang::t('ui.tool.offset'), Lang::t('ui.tool.offset.title')],
        ['tool', 'move', 'arrows-move', Lang::t('ui.tool.move'), Lang::t('ui.tool.move.title')],
        ['tool', 'rotate', 'arrow-repeat', Lang::t('ui.tool.rotate'), Lang::t('ui.tool.rotate.title')],
        ['tool', 'scale', 'arrows-angle-expand', Lang::t('ui.tool.scale'), Lang::t('ui.tool.scale.title')],
        ['tool', 'erase', 'eraser', Lang::t('ui.tool.erase'), Lang::t('ui.tool.erase.title')],
        ['tool', 'tape', 'rulers', Lang::t('ui.tool.tape'), Lang::t('ui.tool.tape.title')],
        ['tool', 'protractor', 'compass', Lang::t('ui.tool.protractor'), Lang::t('ui.tool.protractor.title')],
        ['tool', 'dim', 'arrow-left-right', Lang::t('ui.tool.dim'), Lang::t('ui.tool.dim.title')],
    ],
    'Organize' => [   // i18n-ignore: group key
        ['act', 'component', 'boxes', Lang::t('ui.tool.component'), Lang::t('ui.tool.component.title')],
        ['act', 'group', 'collection', Lang::t('ui.tool.group'), Lang::t('ui.tool.group.title')],
        ['act', 'explode', 'grid-3x3-gap', Lang::t('ui.tool.explode'), Lang::t('ui.tool.explode.title')],
    ],
    'Edit' => [   // i18n-ignore: group key
        ['act', 'undo', 'arrow-counterclockwise', Lang::t('ui.tool.undo'), Lang::t('ui.tool.undo.title')],
        ['act', 'redo', 'arrow-clockwise', Lang::t('ui.tool.redo'), Lang::t('ui.tool.redo.title')],
        ['act', 'copy', 'copy', Lang::t('ui.tool.copy'), Lang::t('ui.tool.copy.title')],
        ['act', 'paste', 'clipboard-plus', Lang::t('ui.tool.paste'), Lang::t('ui.tool.paste.title')],
    ],
    'Camera' => [   // i18n-ignore: group key
        ['tool', 'orbit', 'arrow-clockwise', Lang::t('ui.tool.orbit'), Lang::t('ui.tool.orbit.title')],
        ['tool', 'pan', 'arrows-move', Lang::t('ui.tool.pan'), Lang::t('ui.tool.pan.title')],
        ['tool', 'zoom', 'zoom-in', Lang::t('ui.tool.zoom'), Lang::t('ui.tool.zoom.title')],
        ['act', 'extents', 'arrows-fullscreen', Lang::t('ui.tool.extents'), Lang::t('ui.tool.extents.title')],
        ['tool', 'section', 'scissors', Lang::t('ui.tool.section'), Lang::t('ui.tool.section.title')],
    ],
];
$__views = ['iso', 'top', 'front', 'right', 'back', 'left', 'bottom'];   // labels: ui.views.<name>
?>
<main id="main" class="mc" data-modelcraft>
  <h1 class="visually-hidden"><?= Lang::e('ui.page.h1', ['app' => $app['name']]) ?></h1>

  <div class="mc-tools" role="toolbar" aria-label="<?= Lang::e('ui.tb.aria') ?>">
    <?php foreach ($__tools as $__group => $__items): ?>
      <div class="mc-tool-group" role="group" aria-label="<?= e($__group) ?>">
        <span class="mc-tool-label" aria-hidden="true"><?= Lang::e('ui.tb.group.' . strtolower($__group)) ?></span>
        <div class="mc-tool-row">
          <?php foreach ($__items as [$__kind, $__key, $__icon, $__label, $__title]): ?>
            <button type="button" class="mc-tool" data-<?= $__kind === 'tool' ? 'tool' : 'act' ?>="<?= e($__key) ?>" title="<?= e($__title) ?>"<?= $__kind === 'tool' ? ' aria-pressed="false"' : '' ?>>
              <i class="bi bi-<?= e($__icon) ?>" aria-hidden="true"></i><span><?= e($__label) ?></span>
            </button>
          <?php endforeach; ?>
          <?php if ($__group === 'File'): /* i18n-ignore: a group key */ ?>
            <details class="mc-menu" data-export-menu>
              <summary class="mc-tool" title="<?= Lang::e('ui.export.title') ?>"><i class="bi bi-box-arrow-up-right" aria-hidden="true"></i><span><?= Lang::e('ui.export') ?></span></summary>
              <div class="mc-menu-list" role="menu">
                <button type="button" role="menuitem" data-export="glb"><?= Lang::e('ui.export.glb') ?></button>
                <button type="button" role="menuitem" data-export="dae"><?= Lang::e('ui.export.dae') ?></button>
                <button type="button" role="menuitem" data-export="obj"><?= Lang::e('ui.export.obj') ?></button>
                <button type="button" role="menuitem" data-export="stl"><?= Lang::e('ui.export.stl') ?></button>
                <button type="button" role="menuitem" data-export="print3d"><?= Lang::e('ui.export.print3d') ?></button>
                <button type="button" role="menuitem" data-export="ifc"><?= Lang::e('ui.export.ifc') ?></button>
                <button type="button" role="menuitem" data-act="storeys"><?= Lang::e('ui.export.storeys') ?></button>
                <button type="button" role="menuitem" data-export="dwg"><?= Lang::e('ui.export.dwg') ?></button>
                <button type="button" role="menuitem" data-export="dxf"><?= Lang::e('ui.export.dxf') ?></button>
                <hr>
                <button type="button" role="menuitem" data-export="png"><?= Lang::e('ui.export.png') ?></button>
                <button type="button" role="menuitem" data-export="png2"><?= Lang::e('ui.export.png2') ?></button>
                <button type="button" role="menuitem" data-export="pdf"><?= Lang::e('ui.export.pdf') ?></button>
                <button type="button" role="menuitem" data-export="print"><?= Lang::e('ui.export.print') ?></button>
                <hr>
                <button type="button" role="menuitem" data-export="render"><?= Lang::e('ui.export.render') ?></button>
                <button type="button" role="menuitem" data-export="video"><?= Lang::e('ui.export.video') ?></button>
              </div>
            </details>
          <?php endif; ?>
          <?php if ($__group === 'Organize'): /* i18n-ignore: a group key */ ?>
            <details class="mc-menu" data-solid-menu>
              <summary class="mc-tool" title="<?= Lang::e('ui.solids.title') ?>"><i class="bi bi-union" aria-hidden="true"></i><span><?= Lang::e('ui.solids') ?></span></summary>
              <div class="mc-menu-list" role="menu">
                <button type="button" role="menuitem" data-act="solid-union"><?= Lang::e('ui.solids.union') ?></button>
                <button type="button" role="menuitem" data-act="solid-subtract"><?= Lang::e('ui.solids.subtract') ?></button>
                <button type="button" role="menuitem" data-act="solid-intersect"><?= Lang::e('ui.solids.intersect') ?></button>
              </div>
            </details>
          <?php endif; ?>
          <?php if ($__group === 'Edit'): /* i18n-ignore: a group key */ ?>
            <details class="mc-menu" data-edit-menu>
              <summary class="mc-tool" title="<?= Lang::e('ui.editmenu.title') ?>"><i class="bi bi-three-dots" aria-hidden="true"></i><span><?= Lang::e('ui.editmenu') ?></span></summary>
              <div class="mc-menu-list" role="menu">
                <button type="button" role="menuitem" data-act="cut"><?= Lang::e('ui.editmenu.cut') ?> <kbd>Ctrl+X</kbd></button>
                <button type="button" role="menuitem" data-act="copy"><?= Lang::e('ui.editmenu.copy') ?> <kbd>Ctrl+C</kbd></button>
                <button type="button" role="menuitem" data-act="paste"><?= Lang::e('ui.editmenu.paste') ?> <kbd>Ctrl+V</kbd></button>
                <button type="button" role="menuitem" data-act="paste-in-place"><?= Lang::e('ui.editmenu.paste_in_place') ?> <kbd>Ctrl+Shift+V</kbd></button>
                <button type="button" role="menuitem" data-act="duplicate"><?= Lang::e('ui.editmenu.duplicate') ?> <kbd data-keys-kbd="duplicate">Ctrl+D</kbd></button>
                <button type="button" role="menuitem" data-act="delete"><?= Lang::e('ui.editmenu.delete') ?> <kbd data-keys-kbd="delete">Delete</kbd></button>
                <hr>
                <button type="button" role="menuitem" data-act="hide"><?= Lang::e('ui.editmenu.hide') ?> <kbd data-keys-kbd="hide"></kbd></button>
                <button type="button" role="menuitem" data-act="isolate"><?= Lang::e('ui.editmenu.isolate') ?> <kbd data-keys-kbd="isolate"></kbd></button>
                <button type="button" role="menuitem" data-act="unhide-all"><?= Lang::e('ui.editmenu.unhide_all') ?> <kbd data-keys-kbd="unhide"></kbd></button>
                <hr>
                <button type="button" role="menuitem" data-act="flip-x"><?= Lang::e('ui.editmenu.flip_x') ?></button>
                <button type="button" role="menuitem" data-act="flip-y"><?= Lang::e('ui.editmenu.flip_y') ?></button>
                <button type="button" role="menuitem" data-act="flip-z"><?= Lang::e('ui.editmenu.flip_z') ?></button>
                <button type="button" role="menuitem" data-act="flipcopy-x"><?= Lang::e('ui.editmenu.flipcopy_x') ?></button>
                <button type="button" role="menuitem" data-act="flipcopy-y"><?= Lang::e('ui.editmenu.flipcopy_y') ?></button>
                <button type="button" role="menuitem" data-act="flipcopy-z"><?= Lang::e('ui.editmenu.flipcopy_z') ?></button>
                <hr>
                <button type="button" role="menuitem" data-act="intersect-model"><?= Lang::e('ui.editmenu.intersect_model') ?></button>
                <button type="button" role="menuitem" data-act="intersect-sel"><?= Lang::e('ui.editmenu.intersect_sel') ?></button>
                <hr>
                <button type="button" role="menuitem" data-act="terrain-contours"><?= Lang::e('ui.editmenu.terrain_contours') ?></button>
                <button type="button" role="menuitem" data-act="terrain-grid"><?= Lang::e('ui.editmenu.terrain_grid') ?></button>
                <button type="button" role="menuitem" data-act="sculpt"><?= Lang::e('ui.editmenu.sculpt') ?></button>
                <hr>
                <button type="button" role="menuitem" data-act="axes-place"><?= Lang::e('ui.editmenu.axes_place') ?></button>
                <button type="button" role="menuitem" data-act="axes-face"><?= Lang::e('ui.editmenu.axes_face') ?></button>
                <button type="button" role="menuitem" data-act="axes-reset"><?= Lang::e('ui.editmenu.axes_reset') ?></button>
                <hr>
                <button type="button" role="menuitem" data-act="select-all"><?= Lang::e('ui.editmenu.select_all') ?> <kbd data-keys-kbd="all">Ctrl+A</kbd></button>
                <button type="button" role="menuitem" data-act="select-none"><?= Lang::e('ui.editmenu.select_none') ?> <kbd data-keys-kbd="none">Esc</kbd></button>
                <hr>
                <button type="button" role="menuitemradio" aria-checked="true" data-act="keys-sketchup"><?= Lang::e('ui.editmenu.keys_sketchup') ?></button>
                <button type="button" role="menuitemradio" aria-checked="false" data-act="keys-blender"><?= Lang::e('ui.editmenu.keys_blender') ?></button>
              </div>
            </details>
          <?php endif; ?>
          <?php if ($__group === 'Camera'): /* i18n-ignore: a group key */ ?>
            <details class="mc-menu" data-view-menu>
              <summary class="mc-tool" title="<?= Lang::e('ui.views.title') ?>"><i class="bi bi-camera" aria-hidden="true"></i><span><?= Lang::e('ui.views') ?></span></summary>
              <div class="mc-menu-list" role="menu">
                <?php foreach ($__views as $__k): ?>
                  <button type="button" role="menuitem" data-view="<?= e($__k) ?>"><?= Lang::e('ui.views.' . $__k) ?></button>
                <?php endforeach; ?>
                <hr>
                <button type="button" role="menuitemcheckbox" aria-checked="true" data-persp><?= Lang::e('ui.views.persp') ?></button>
                <button type="button" role="menuitemcheckbox" aria-checked="false" data-present><?= Lang::e('ui.views.present') ?> <kbd>Shift+P</kbd></button>
                <button type="button" role="menuitemcheckbox" aria-checked="false" data-timeline-toggle><?= Lang::e('ui.views.timeline') ?></button>
                <button type="button" role="menuitem" data-xr-enter aria-disabled="true"><?= Lang::e('ui.views.vr') ?></button>
                <button type="button" role="menuitem" data-guide-open><?= Lang::e('ui.views.guide') ?></button>
                <hr>
                <button type="button" role="menuitemcheckbox" aria-checked="true" data-sec-planes><?= Lang::e('ui.views.sec_planes') ?></button>
                <button type="button" role="menuitemcheckbox" aria-checked="true" data-sec-cuts><?= Lang::e('ui.views.sec_cuts') ?></button>
              </div>
            </details>
          <?php endif; ?>
        </div>
      </div>
    <?php endforeach; ?>
    <input type="file" class="visually-hidden" accept=".modelcraft,.json" tabindex="-1" aria-hidden="true" data-file-open>
    <input type="file" class="visually-hidden" accept=".skp,.dae,.obj,.glb,.gltf,.dwg,.dxf" tabindex="-1" aria-hidden="true" data-file-import>
  </div>

  <aside class="mc-panel mc-left" aria-label="<?= Lang::e('ui.left.aria') ?>">
    <section class="mc-sec">
      <div class="mc-sec-head" data-tree-top title="<?= Lang::e('ui.outliner.top_title') ?>">
        <h2 class="mc-h"><?= Lang::e('ui.outliner') ?></h2>
        <button type="button" class="mc-linkbtn" data-close-ctx hidden><?= Lang::e('ui.outliner.close') ?></button>
      </div>
      <p class="mc-crumbs" data-crumbs></p>
      <input type="search" class="mc-input mc-tree-search" data-tree-search placeholder="<?= Lang::e('ui.outliner.search') ?>" aria-label="<?= Lang::e('ui.outliner.search') ?>" autocomplete="off" spellcheck="false" hidden>
      <ul class="mc-tree" data-tree></ul>
      <p class="mc-note" data-tree-empty data-keys-note="tree"><?= $__lx('ui.outliner.empty', ['comp' => '<kbd>G</kbd>', 'group' => '<kbd>Shift</kbd>+<kbd>G</kbd>']) ?></p>
    </section>
    <section class="mc-sec">
      <div class="mc-sec-head">
        <h2 class="mc-h"><?= Lang::e('ui.comps') ?></h2>
        <button type="button" class="mc-linkbtn" data-starter><i class="bi bi-grid" aria-hidden="true"></i> <?= Lang::e('ui.comps.starter') ?></button>
      </div>
      <ul class="mc-list" data-comps></ul>
      <p class="mc-note" data-comps-empty data-keys-note="comps"><?= $__lx('ui.comps.empty', ['key' => '<kbd>G</kbd>']) ?></p>
    </section>
  </aside>

  <section class="mc-stage" aria-label="<?= Lang::e('ui.stage.aria') ?>" data-stage>
    <canvas class="mc-canvas" data-gl aria-hidden="true"></canvas>
    <canvas class="mc-canvas mc-over" data-over tabindex="0" aria-label="<?= Lang::e('ui.stage.canvas') ?>"></canvas>
    <div class="mc-hint" data-hint>
      <p class="mc-hint-h"><?= Lang::e('ui.hint.h') ?></p>
      <ul data-keys-hint>
        <li><?= $__lx('ui.hint.rect', ['key' => '<kbd>R</kbd>', 'eg' => '<kbd>4m,3m</kbd>', 'enter' => '<kbd>Enter</kbd>']) ?></li>
        <li><?= $__lx('ui.hint.push', ['key' => '<kbd>P</kbd>']) ?></li>
        <li><?= $__lx('ui.hint.tools', ['l' => '<kbd>L</kbd>', 'c' => '<kbd>C</kbd>', 'm' => '<kbd>M</kbd>', 'ctrl' => '<kbd>Ctrl</kbd>', 't' => '<kbd>T</kbd>']) ?></li>
        <li><?= $__lx('ui.hint.group', ['comp' => '<kbd>G</kbd>', 'group' => '<kbd>Shift</kbd>+<kbd>G</kbd>']) ?></li>
        <li><?= $__lx('ui.hint.camera', ['shift' => '<kbd>Shift</kbd>']) ?></li>
        <li><?= Lang::e('ui.hint.local') ?></li>
      </ul>
      <p class="mc-hint-guide"><button type="button" class="btn-line btn-sm-cc" data-guide-open><i class="bi bi-signpost-2" aria-hidden="true"></i> <?= Lang::e('ui.hint.guide') ?></button></p>
      <div data-recent-files data-max="6"></div>
    </div>
    <?php /* The guided first model (0.6 LC.21, session model-part-extra_PART_2): firstmodel.js reads the steps from the model; modelcraft.js fills the card. */ ?>
    <section class="mc-guide" data-guide hidden aria-labelledby="mc-guide-h" aria-live="polite"></section>
    <div class="mc-drop" data-drop hidden><span><i class="bi bi-box-arrow-in-down-right" aria-hidden="true"></i> <?= Lang::e('ui.drop') ?></span></div>
    <div class="mc-scenebar" data-scenebar hidden></div>
    <div class="mc-touchbar" data-touchbar role="toolbar" aria-label="<?= Lang::e('ui.touch.aria') ?>" hidden>
      <button type="button" class="mc-tool" data-touch="done"><i class="bi bi-check-lg" aria-hidden="true"></i><span><?= Lang::e('ui.touch.done') ?></span></button>
      <button type="button" class="mc-tool" data-touch="cancel"><i class="bi bi-x-lg" aria-hidden="true"></i><span><?= Lang::e('ui.touch.cancel') ?></span></button>
      <button type="button" class="mc-tool" data-touch="undo"><i class="bi bi-arrow-counterclockwise" aria-hidden="true"></i><span><?= Lang::e('ui.touch.undo') ?></span></button>
    </div>
  </section>

  <?php /* Animation (0.6 LC.10, session lc-model): the timeline under the view, built by timeline.js; hidden until Views › Timeline. */ ?>
  <section class="mc-timeline" data-timeline aria-label="<?= Lang::e('ui.timeline.aria') ?>" hidden></section>

  <aside class="mc-panel mc-right" aria-label="<?= Lang::e('ui.right.aria') ?>">
    <section class="mc-sec">
      <h2 class="mc-h" data-info-h><?= Lang::e('ui.info') ?></h2>
      <div data-info></div>
    </section>
    <section class="mc-sec">
      <h2 class="mc-h" id="mc-colors-h"><?= Lang::e('ui.colors') ?></h2>
      <div class="mc-palette" data-palette role="radiogroup" aria-labelledby="mc-colors-h"></div>
      <p class="mc-note" data-palette-note><?= Lang::e('ui.colors.note') ?></p>
    </section>
    <?php /* Materials (0.5 RC.7, session render): the library in render/materials.js, built by modelcraft.js "Materials". */ ?>
    <section class="mc-sec">
      <h2 class="mc-h" id="mc-mats-h"><?= Lang::e('ui.materials') ?></h2>
      <div class="mc-matlib" data-matlib role="radiogroup" aria-labelledby="mc-mats-h"></div>
      <p class="mc-note"><?= Lang::e('ui.materials.note') ?></p>
    </section>
    <?php /* Lights (0.5 RC.11 (d), session render): lamps for rendered pictures; modelcraft.js "Lights". */ ?>
    <section class="mc-sec" data-lights-sec>
      <h2 class="mc-h" id="mc-lights-h"><?= Lang::e('ui.lights') ?></h2>
      <div class="mc-lights-add" role="group" aria-labelledby="mc-lights-h">
        <button type="button" class="btn-line btn-sm-cc" data-light-add="point"><i class="bi bi-lightbulb" aria-hidden="true"></i> <?= Lang::e('ui.lights.point') ?></button>
        <button type="button" class="btn-line btn-sm-cc" data-light-add="spot"><i class="bi bi-lamp" aria-hidden="true"></i> <?= Lang::e('ui.lights.spot') ?></button>
        <button type="button" class="btn-line btn-sm-cc" data-light-add="area"><i class="bi bi-grid-3x3" aria-hidden="true"></i> <?= Lang::e('ui.lights.area') ?></button>
      </div>
      <ul class="mc-list mc-lights" data-lights aria-labelledby="mc-lights-h"></ul>
      <div class="mc-props" data-light-edit hidden></div>
      <p class="mc-note"><?= Lang::e('ui.lights.note') ?></p>
    </section>
    <section class="mc-sec">
      <h2 class="mc-h" id="mc-tags-h"><?= Lang::e('ui.tags') ?></h2>
      <ul class="mc-list mc-tags" data-tags aria-labelledby="mc-tags-h"></ul>
      <button type="button" class="mc-linkbtn" data-tag-add><i class="bi bi-plus-lg" aria-hidden="true"></i> <?= Lang::e('ui.tags.add') ?></button>
      <p class="mc-note"><?= Lang::e('ui.tags.note') ?></p>
    </section>
    <section class="mc-sec">
      <h2 class="mc-h"><?= Lang::e('ui.style') ?></h2>
      <div class="mc-props" data-style>
        <label for="mc-mode"><?= Lang::e('ui.style.faces') ?></label>
        <select id="mc-mode" class="mc-select" data-style-mode>
          <option value="shaded"><?= Lang::e('ui.style.mode.shaded') ?></option>
          <option value="hidden"><?= Lang::e('ui.style.mode.hidden') ?></option>
          <option value="wire"><?= Lang::e('ui.style.mode.wire') ?></option>
          <option value="xray"><?= Lang::e('ui.style.mode.xray') ?></option>
        </select>
        <span class="k"><?= Lang::e('ui.style.edges') ?></span>
        <label class="mc-check"><input type="checkbox" data-style-edges checked> <?= Lang::e('ui.style.edges.show') ?></label>
        <span class="k"><?= Lang::e('ui.style.shadows') ?></span>
        <label class="mc-check"><input type="checkbox" data-style-shadows> <?= Lang::e('ui.style.shadows.sun') ?></label>
      </div>
      <fieldset class="mc-props mc-sun" data-sun disabled>
        <legend class="visually-hidden"><?= Lang::e('ui.sun') ?></legend>
        <label for="mc-sun-month"><?= Lang::e('ui.sun.date') ?></label>
        <div class="mc-row">
          <select id="mc-sun-month" class="mc-select" data-sun-month>
            <?php for ($__i = 1; $__i <= 12; $__i++): ?>
              <option value="<?= $__i ?>"><?= Lang::e('ui.sun.month.' . $__i) ?></option>
            <?php endfor; ?>
          </select>
          <input type="number" class="mc-input mc-num" min="1" max="31" step="1" aria-label="<?= Lang::e('ui.sun.day') ?>" data-sun-day>
        </div>
        <label for="mc-sun-hour"><?= Lang::e('ui.sun.time') ?></label>
        <div class="mc-row">
          <input type="range" id="mc-sun-hour" min="0" max="23.75" step="0.25" data-sun-hour>
          <output class="mc-out" data-sun-hour-out></output>
        </div>
        <label for="mc-sun-lat"><?= Lang::e('ui.sun.lat') ?></label>
        <input type="number" id="mc-sun-lat" class="mc-input" min="-90" max="90" step="0.01" data-sun-lat>
        <label for="mc-sun-lon"><?= Lang::e('ui.sun.lon') ?></label>
        <input type="number" id="mc-sun-lon" class="mc-input" min="-180" max="180" step="0.01" data-sun-lon>
        <label for="mc-sun-tz"><?= Lang::e('ui.sun.tz') ?></label>
        <input type="number" id="mc-sun-tz" class="mc-input" min="-14" max="14" step="0.5" data-sun-tz>
        <p class="mc-note span" data-sun-info></p>
      </fieldset>
    </section>
    <?php /* Issues (0.6 LC.19, session lc-model): placed in VR (Views › Review in VR), saved as BCF; xr-mc.js builds the list. */ ?>
    <section class="mc-sec" data-issues>
      <h2 class="mc-h" id="mc-issues-h"><?= Lang::e('ui.issues') ?></h2>
      <ul class="mc-list mc-issues" data-issues-list aria-labelledby="mc-issues-h"></ul>
      <p class="mc-note" data-issues-empty><?= Lang::e('ui.issues.empty') ?></p>
      <button type="button" class="btn-line btn-sm-cc" data-issues-bcf disabled><?= Lang::e('ui.issues.bcf') ?></button>
    </section>
    <section class="mc-sec">
      <div class="mc-sec-head">
        <h2 class="mc-h"><?= Lang::e('ui.scenes') ?></h2>
        <button type="button" class="mc-linkbtn" data-scene-add><i class="bi bi-plus-lg" aria-hidden="true"></i> <?= Lang::e('ui.scenes.add') ?></button>
      </div>
      <ol class="mc-scenes" data-scenes></ol>
      <p class="mc-note" data-scenes-empty><?= $__lx('ui.scenes.empty', ['up' => '<kbd>Page Up</kbd>', 'down' => '<kbd>Page Down</kbd>']) ?></p>
      <div class="mc-scene-nav" data-scene-nav hidden>
        <button type="button" class="btn-line btn-sm-cc" data-scene-prev><i class="bi bi-chevron-left" aria-hidden="true"></i> <?= Lang::e('ui.scenes.prev') ?></button>
        <button type="button" class="btn-line btn-sm-cc" data-scene-play aria-pressed="false"><i class="bi bi-play-fill" aria-hidden="true"></i> <?= Lang::e('ui.scenes.play') ?></button>
        <button type="button" class="btn-line btn-sm-cc" data-scene-next><?= Lang::e('ui.scenes.next') ?> <i class="bi bi-chevron-right" aria-hidden="true"></i></button>
        <button type="button" class="btn-line btn-sm-cc" data-scene-record aria-pressed="false" title="<?= Lang::e('ui.scenes.record.title') ?>"><i class="bi bi-camera-reels" aria-hidden="true"></i> <?= Lang::e('ui.scenes.record') ?></button>
      </div>
    </section>
  </aside>

  <footer class="mc-status" aria-label="<?= Lang::e('ui.status.aria') ?>">
    <span class="mc-tip" data-tip aria-live="polite"></span>
    <span class="mc-msg" data-msg aria-live="polite"></span>
    <form class="mc-vcb" data-vcb-form autocomplete="off">
      <label for="mc-vcb" class="mc-vcb-label" data-vcb-label><?= Lang::e('ui.vcb') ?></label>
      <input type="text" id="mc-vcb" class="mc-vcb-input" data-vcb spellcheck="false" autocapitalize="off" inputmode="text">
      <button type="button" class="mc-toggle mc-vcb-kbd" data-vcb-kbd aria-pressed="false" title="<?= Lang::e('ui.vcb.kbd.title') ?>" hidden><?= Lang::e('ui.vcb.kbd') ?></button>
    </form>
    <label class="visually-hidden" for="mc-keys"><?= Lang::e('ui.keys') ?></label>
    <select id="mc-keys" class="mc-select mc-units" data-mc-keys title="<?= Lang::e('ui.keys.title') ?>">
      <option value="sketchup"><?= Lang::e('ui.keys.sketchup') ?></option>
      <option value="blender"><?= Lang::e('ui.keys.blender') ?></option>
    </select>
    <button type="button" class="mc-toggle" data-mc-toggle="snap" aria-pressed="true" title="<?= Lang::e('ui.snap.title') ?>"><?= Lang::e('ui.snap') ?></button>
    <button type="button" class="mc-toggle" data-mc-toggle="collide" aria-pressed="true" title="<?= Lang::e('ui.collide.title') ?>"><?= Lang::e('ui.collide') ?></button>
    <label class="visually-hidden" for="mc-units"><?= Lang::e('ui.units') ?></label>
    <select id="mc-units" class="mc-select mc-units" data-units>
      <optgroup label="<?= Lang::e('ui.units.imperial') ?>">
        <option value="ft-in"><?= Lang::e('ui.units.ftin') ?></option>
        <option value="in">in</option><?php /* i18n-ignore: a unit symbol */ ?>
        <option value="ft">ft</option><?php /* i18n-ignore: a unit symbol */ ?>
        <option value="yd">yd</option><?php /* i18n-ignore: a unit symbol */ ?>
        <option value="mi">mi</option><?php /* i18n-ignore: a unit symbol */ ?>
        <option value="mil">mil</option><?php /* i18n-ignore: a unit symbol */ ?>
      </optgroup>
      <optgroup label="<?= Lang::e('ui.units.metric') ?>">
        <option value="um">µm</option><?php /* i18n-ignore: a unit symbol */ ?>
        <option value="mm">mm</option><?php /* i18n-ignore: a unit symbol */ ?>
        <option value="cm">cm</option><?php /* i18n-ignore: a unit symbol */ ?>
        <option value="m">m</option><?php /* i18n-ignore: a unit symbol */ ?>
        <option value="km">km</option><?php /* i18n-ignore: a unit symbol */ ?>
      </optgroup>
    </select>
  </footer>
</main>
