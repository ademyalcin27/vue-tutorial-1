import i18n from '@/plugins/i18n';

export default function translateModelProperty(name, property) {
  let key = `models.${name}.properties.${property}`;
  if (i18n.te(key)) {
    return i18n.t(key);
  }

  key = `common.properties.${property}`;

  if (i18n.te(key)) {
    return i18n.t(key);
  }

  return property;
}
