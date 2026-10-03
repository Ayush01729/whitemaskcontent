export function GuaranteeValue({guarantee}) {
  return(
    <p className="font-display text-2xl text-paper">
    {guarantee.originalValue && <span className="mr-1.5 text-mute line-through">{guarantee.originalValue}</span>}
    {guarantee.value}
    </p>
  );
}