import { DropdownButton } from 'dropdownButton';
import { ISettingsOptions } from 'Settings/ISettings';
/**
 * @link Settings/Settings
 * @description Блок настроек
 */
export default function Settings({
  items = [],
  backgroundColor = 'var(--default_background_color)'
}: ISettingsOptions) {
  return (
    <section className="settings flexbox">
      {items.map((item, index) => (
        <div key={index} className="settings-item marginRight-s">
          <DropdownButton
            title={item.title}
            backgroundColor={backgroundColor}
            items={item.items}
            multiSelect={false}
            selectedKeys={[item.selectedKey]}
            selectedKeysChanged={item.callback}
          />
        </div>
      ))}
    </section>
  );
}
