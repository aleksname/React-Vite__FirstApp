import Button from   './Button/Button'

function TabsSection({active, onChange}) {
    return (
        <section style={{marginBottom: '1rem'}}>
            <Button isActive={active === 'crossword'} onClick={() => onChange("crossword")}>Кросворд</Button>
            <Button isActive={active === 'anograma'} onClick={() => onChange("anograma")}>Анограма</Button>
        </section>
    )
}

export default TabsSection