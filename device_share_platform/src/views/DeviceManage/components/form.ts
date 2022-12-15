import type { PropType } from "vue";
import type { FormSchema } from "@/types/form";

export interface PropsDefined {
  schema?: Array<PropType<FormSchema>>;
}
