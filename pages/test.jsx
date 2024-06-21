import { UiSelectField } from "../components/uikit/fields/ui-select-field";
import { UiTextField } from "../components/uikit/fields/ui-text-field";

export default function TestPage() {
  return (
    <div className="flex justify-center p-5">
      {/* <UiTextField
        className="mb-4"
        label="Label"
        placeholder="Placeholder"
        helperText="Helper text"
        errorText="Error text"
        required
      /> */}
      <UiSelectField
        className="mb-4"
        label="Label"
        placeholder="Placeholder"
        helperText="Helper text"
        required
        options={[
          { label: "Первый label", value: 1 },
          { label: "Второй label", value: 2 },
        ]}
      />
    </div>
  );
}
