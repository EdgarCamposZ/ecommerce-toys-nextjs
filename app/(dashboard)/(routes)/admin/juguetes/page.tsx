import { Button } from "@/components/ui/button";
import Link from "next/link";

const JueguetesPage = () => {
    return (
        <div className="p-6">
            <Link href="/admin/create">
                <Button> Nuevo juguete </Button>
            </Link>
        </div>
    );
}

export default JueguetesPage;
