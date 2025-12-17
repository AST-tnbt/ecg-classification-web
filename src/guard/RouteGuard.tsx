import { Navigate, Outlet } from "react-router"

type RouteGuardProps = {
  allowed: boolean
}

export default function RouteGuard({ allowed }: RouteGuardProps) {
  if (!allowed) {
    return <Navigate to="/analyze" replace />
  }

  return <Outlet />
}