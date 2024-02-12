import Button from   './Button/Button'

function TabsSection({active, onChange}) {
    return (
        <section style={{marginBottom: '1rem'}}>
            <Button isActive={active === 'main'} onClick={() => onChange("main")}>Main</Button>
            <Button isActive={active === 'feedback'} onClick={() => onChange("feedback")}>Feetback</Button>
        </section>
    )
}

export default TabsSection